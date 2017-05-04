<?php
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
include('admin/includes/config.php');
include('admin/includes/function.php');
include('includes/paypal_config.php');
include("admin/class/db.php");

function do_checkout($user_id,$paypal_id){
	$privacy_id=0;
	if(!isset($resource)){
	$resource=new Db_process();
	$s_id=session_id();
	$cart=$resource->select("select * from cart where session_id='".$s_id."' and status=1 order by add_time desc");
	if(!isset($cart[0]['cart_id'])){
		return false;
	}
	$cart_id="";
	$total="";
	foreach($cart as $k=>$v){
		$cart_id.=$v['cart_id'].",";
		$total+=$v['price'];
	}//end ofreach 
	 $cart_id=trim($cart_id,",");
	 $t=time();
	 $sql="insert into cart_master set is_paypal='".$paypal_id."', privacy_insert_id='".$privacy_id."', cart_id='".$cart_id."',user_id='".$user_id."',total_price='".$total."',add_time='".$t."'"; 
			$order_id=$resource->basic_insert($sql);
			if($order_id){
				$sql_up="update cart set status=100 where cart_id in($cart_id)";
				if($resource->execute($sql_up)){
					$_SESSION['order_id']=$order_id;
                                        $_SESSION['order_managment']=$order_id;
					return true;
				}//end of if 
				else{ return false; }
			}//end of iff
			else{ return false; }
	}//end of if 

}//end of do_checkout process 


if (isset($_GET['success']) && $_GET['success'] == 'true') {
	
    $paymentId = $_GET['paymentId'];
    $payment = Payment::get($paymentId, $apiContext);
	$execution = new PaymentExecution();
    $execution->setPayerId($_GET['PayerID']);
	try{
		$result=$payment->execute($execution,$apiContext);
	}catch(Exception $e){
		echo "Error occur during payment ";
	}
	$payment=json_decode($payment);
	$transaction_id=$payment->id;
	$payer_info=$payment->payer->payer_info;
	$email=$payer_info->email;
	$first_name=$payer_info->first_name;
	$last_name=$payer_info->last_name;
	$state=$payment->state;
	
	$sql="select user_id from user_registration where email='".$email."'";
	$rs=$resource->select($sql);
	if(isset($rs[0]['user_id'])){
		$user_id=$rs[0]['user_id'];
		
		if(do_checkout($user_id,$transaction_id)){
			redirect('order-sucess.php');
			exit;
		}else{
			redirect($page_name."?err_privacy");
			exit;
		}//end of else 
		
	}else{
		/* new registration */
		$t=time();
		$sql="insert into user_registration set fn='".$first_name."',ln='".$last_name."', email='".$email."',log_type=3,add_time='".$t."' ";
		$user_id=$resource->basic_insert($sql);
		if(isset($user_id)){
			  
			if(do_checkout($user_id,$transaction_id)){
				redirect('order-sucess.php');
				exit;
			}else{
				redirect($page_name."?err_privacy");
				exit;
			}//end of else 
			
		}//end of if 
	}//end of else 


}
	

?>