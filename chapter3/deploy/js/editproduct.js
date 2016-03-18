var prodID = window.name;

var prodRef = new Firebase('https://basedemo.firebaseio.com/products');

var name, desc, price, img;

var oneProduct = {};

prodRef.child(prodID).once('value', function(snapshot){
    oneProduct = snapshot.val();
    console.log(oneProduct)
    name = oneProduct.name;
    desc = oneProduct.description;
    price = oneProduct.price;
    img = oneProduct.image;

    $('#itemName').val(name);    
    $('#itemDescription').val(desc);
    $('#itemPrice').val(price);
    
    $('#preview').attr('src', img);
});


$('#imageInput').change(function() {
    var reader = new FileReader();    
    reader.onloadend = function() {
        img = reader.result;
        $('#preview').attr('src', reader.result); 
    };
   reader.readAsDataURL(this.files[0]);
}); 


function onComplete (error) {
    if (error) {
        alert('update failed, error code : ' + error.code);
    } else {
        alert('update suceeded');
        location.assign('productListing.html');
    }
}







function editProduct() {
    var editName = $('#itemName').val();  
    var editDesc = $('#itemDescription').val();
    var editPrice = $('#itemPrice').val();
    var editImg = img;
    
    
    prodRef.child(prodID).update({
        name: editName,
        description: editDesc,
        price: editPrice,
        image: editImg

    },
        onComplete
    );
    
    
}

$('#editButton').click(editProduct);