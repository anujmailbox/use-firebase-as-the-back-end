var myRef = new Firebase('https://basedemo.firebaseio.com');

var itemName;
var itemDescription;
var itemPrice;
var baseImg;

$('#imageInput').change(function() {
    var reader = new FileReader();
    reader.onloadend = function() { 
        baseImg = reader.result;
        $('#preview').attr('src', reader.result);
    };
    reader.readAsDataURL(this.files[0]);
});


$('#addForm').change(function(){
    itemName = $('#itemName').val();
    itemDescription = $('#itemDescription').val();
    itemPrice = $('#itemPrice').val();
    if (itemName && itemDescription && itemPrice ) {
        $('#saveButton').removeProp('disabled');
    } else {
        $('#saveButton').prop('disabled', 'disabled');
    }
});


function addProduct() {
    itemName = $('#itemName').val();
    itemDescription = $('#itemDescription').val();
    itemPrice = $('#itemPrice').val();
    
    if (!baseImg) {
        baseImg = 'NONE';
    }
    
    var prodRef= myRef.child('products');
    
    prodRef.push({
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        image: baseImg
    });
}

$('#saveButton').click(addProduct);
