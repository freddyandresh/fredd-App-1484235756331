<script src="https://coopealfaroruizrl.sharepoint.com/sites/vacaciones/Utilidades/jquery-3.1.0.min.js"></script>
<script src="https://coopealfaroruizrl.sharepoint.com/sites/vacaciones/Utilidades/sputility.min.js"></script>

<script>
//Si algun campo en el formulario cambia debe cambiarse aquí
$(document).ready(function () {
    alert(countryFieldValue);
    // Get a single select dropdown field
    var countryField = SPUtility.GetSPField('Categor\u00eda de la compra');
    var showOrHideField = function() {
        var countryFieldValue = countryField.GetValue();
        
        // Hide the City field if the selected value is Other
        if(countryFieldValue == 'Combustible') {
            SPUtility.ShowSPField('Placa');
            SPUtility.ShowSPField('Kilometraje');
            SPUtility.ShowSPField('Litros');
            SPUtility.ShowSPField('Precio por litro');
            SPUtility.HideSPField('Finalizar Factura');
          //  SPUtility.HideSPField('T\u00edtulo');
        }
        else{
            SPUtility.HideSPField('Placa');
            SPUtility.HideSPField('Kilometraje');
            SPUtility.HideSPField('Litros');
            SPUtility.HideSPField('Precio por litro');
            SPUtility.HideSPField('Finalizar Factura');
        } 
    };

    // run at startup (for edit form)
    showOrHideField();

    // make sure if the user changes the value we handle it
    $(countryField.Dropdown).on('change', showOrHideField);
});
</script>