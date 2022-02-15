

function main(){
    //recive value from html tag
    var product_price = document.getElementById("product_price").value;
    var n_of_installment = document.getElementById("n_of_installment").value;
    

    //calculation
    var min_first_pay = (product_price * 30/100);
    var due = product_price - min_first_pay;
    var due_with_5_persent_interest = due + ((due*5)/100)
    var per_installment_amount = due_with_5_persent_interest / n_of_installment;

    //sent value
    var first_pay = document.getElementById("first_pay").value = min_first_pay;
    var sent_per_install_ammoung = document.getElementById("recive_per_installment_amount").value=per_installment_amount;

    

}