function uploadImage() {
    var input = document.getElementById('imageInput');
    var previewImage = document.getElementById('previewImage');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            previewImage.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
