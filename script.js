let firstName = document.querySelector('#first_name');
let resName = document.querySelector('#resName');
let validName = false

let company = document.querySelector('#company');
let resCompany = document.querySelector('#resCompany');
let validCompany = false

let telephony = document.querySelector('#phone');
let resTelephony = document.querySelector('#resPhone');
let validTelephony = false;

let email = document.querySelector('#email');
let resEmail = document.querySelector('#resEmail');
let validEmail = false;

let inputCadastro = document.getElementById('input-cadastro')
var respErro = document.getElementById('respErro');
var respSucesso = document.getElementById('respSucesso');

let assunto = document.querySelector('#subject');
let resAssunto = document.querySelector('#resAssunto')
let validSelect = false;

let checkbox = document.querySelector('.checkbox')
let validService = false;

let btn = document.querySelector('#btnEnviar');

//eventos da validação geral
firstName.addEventListener('input', validar);
company.addEventListener('input', validar);
telephony.addEventListener('input', validar);
email.addEventListener('input', validar);
checkbox.addEventListener('change', validServiceF)
checkbox.addEventListener('change', validar)



function validSubject(){

    if(assunto.value != 'disabled'){
        resAssunto.style.color = 'black';
        telephony.style.borderBlockColor = ' #008000'
        resAssunto.innerHTML='Assunto:';
        validSelect = true;    
        validar()    
    
    }else{
        telephony.style.borderBlockColor = ' #CA1C2A'
        resAssunto.innerHTML='*Assunto: ';	
        resAssunto.style.color = '#CA1C2A';
        validSelect = false;  
    } 

}

function validaName (){

    
    if(firstName.value == ''){
        firstName.style.borderBlockColor = ' #CA1C2A'
        resName.innerHTML = '*Nome: ';		
        resName.style.color = '#CA1C2A'
        firstName.focus();
      }else{
        resName.innerHTML='Nome: ';  
        resName.style.color = 'black'
        firstName.style.borderBlockColor = ' #008000'
        resName.style.fontSize = ' 0.9rem'
        validName = true;
      }  
}      

function validaCompany (){

    if(company.value == ''){
        company.setAttribute  = 'borderBlockColor: #CA1C2A'
        resCompany.innerHTML = '*Empresa: ';		
        resCompany.style.color = '#CA1C2A'
        company.focus();

    }else if (company.value.length < 3 || company.value.length >= 60 ){
        company.style.borderBlockColor = ' #CA1C2A'
        resCompany.innerHTML = '*Empresa:';	
        resCompany.style.color = '#CA1C2A'
        validCompany = false;

      }else{
        company.style.borderBlockColor = ' #008000'  
        resCompany.innerHTML='Empresa: ';
        resCompany.style.color = 'black';
        validCompany = true;
    }    
}    

function validaTelephony(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)

    if(telephony.value.length > 13){
        resTelephony.style.color = 'black';
        telephony.style.borderBlockColor = ' #008000'
        resTelephony.innerHTML='Telefone:';
        validTelephony = true;
    }else{
        telephony.style.borderBlockColor = ' #CA1C2A'
        resTelephony.innerHTML='*Telefone: ';	
        resTelephony.style.color = '#CA1C2A';
        validTelephony = false;  
    }    
}    
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}    
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;

}    

function validaEmail(emaill){

    let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
     
       if(email.value==''){
           email.style.borderBlockColor = ' #CA1C2A'
           resEmail.innerHTML ='*Email:';		
          resEmail.style.color = '#CA1C2A' 
          email.focus();
          validEmail = false;
          //verifica se o email possui um @ e de 2 a 3 caracteres após o ponto
        } else if (!ev.test(emaill)) {
          email.style.borderBlockColor = '#CA1C2A'  
          resEmail.innerHTML = '*Email Inválido';		
          resEmail.style.color = '#CA1C2A';
        }else{
            resEmail.style.color = 'black'
            resEmail.innerHTML ='Email: ';	
            email.style.borderBlockColor = ' #008000'
            validEmail = true;
        }    
}  
//formatação do regex do cnpj

//função para verificar se o campo possui apenas acentos e letras
function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }    
        if (
            
            (charCode == 32) || 
            (charCode == 63) ||
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
            ){
            return true;    
        } else {
            return false;
        }    
    } catch (err) {
        alert(err.Description);
    }    
}    


//validação geral com o evento input para veficar se cada campo está Preenchido com todos os requisitos solicitados
        function validar(){    
        if (validName && validCompany && validTelephony && validEmail && validService){  
            respSucesso.style.color = '#000'
            respSucesso.style.fontSize = '0.8rem'
            respErro.innerHTML ='' 
            console.log("test")
            
            btn.disabled = false;
            btn.style = 'background-color: #CA1C2A'

            btn.style.cursor = 'pointer'
            
            
        }else{
            respErro.style.fontSize = '0.8rem'
            respErro.style.color = '#000'
            respSucesso.innerHTML = ''
            respErro.innerHTML = '*Preencha todos os campos corretamente' 

            btn.disabled = true
            btn.style.cursor = 'no-drop'
            
        }
    }
    
    let accordion = document.querySelector(".accordion");
    let accordionChild = accordion.children
    let select = document.querySelector('.Select')
    let selectLista = ['']


    //Validar se o service foi selecionado 
  
    function validServiceF(){
        if(selectLista.length == 0){
            validService = false;
            validar()     
        }else{
            validService = true;
            validar()
        }
    }
    

    function verify (texto, id, service, label){
        
        let serviceId = document.getElementById(id)        

        if (serviceId.checked == true){
            create(texto, label)                     
            selectLista.push(service) 
            validServiceF()
        }else{
            document.getElementById(label).remove();  
            selectLista.shift(service) 
            validServiceF()
        }
               
       
    }


    //Função de criação dos elementos
    
    function numberInputElementCreator2(element, className, label, content) {
        let newElement = document.createElement(element)
        newElement.textContent = content
        newElement.id = label
        newElement.className = className
        return newElement;
    }
    
    //Cria os elementos correspondentes aos itens selecionados
    
    //Verificação se há o service, se houver ele remove
    
    var testeres = document.getElementById("testeres");

    testeres.style.display = 'none'

    function Checked(value){
        
        testeres.style.display = 'block'

            switch (value){
                case "INTERNET":                
                    verify(texto = '- Internet Dedicada = Callnet Premium', id = 'checkboxInternet', service = 'internet', label = 'lDedicada');                   
                break;
                
                case "BANDA":            
                    verify(texto = '- Banda Larga - Callnet Banda Larga', id = 'checkboxBanda', service = 'banda', label = 'LBanda')                   
                break;

                case "WIFI":     
                    verify(texto = '- Wi-fi', id = 'checkboxWifi', service = 'wifi', label = 'LWifi' )                 
                break;
    
                case "IPBX":
                    verify(texto = '- Callphone VIP - IPBX', id = 'checkboxVip', service = 'callphone' , label = 'LCallphone')
                break;
    
                case "E1":
                    verify(texto = '- E1', id = 'checkboxE1', service = 'e1', label = 'LE1')
                break;
                
                case "SIP":
                    verify(texto = '- SIP TRUNK', id = 'checkboxSip', service = 'sip', label = 'LSip')
                break;
    
                case "0800":
                    verify(texto = '- Números 0800 e 40XX', id = 'checkbox0800', service = 'n0800' , label = 'LN0800')
                break;
                
                case "PONTO":
                    verify(texto = '- Callnet Ponto-a-Ponto', id = 'checkboxPonto', service = 'callnet' , label = 'LPonto')
                break;
                
                case "MPLS":
                    verify(texto = '- Callnet MPLS', id = 'checkboxMPLS', service = 'mpls', label = 'LMpls' )
                break;
                
                case "FIBRA":
                    verify(texto = '- Fibra Apagada e Dutos', id = 'checkboxFibra', service = 'fibra' , label = 'Lfibra')
                break;
    
                case "LOCATION":
                    verify(texto = '- Co-location', id = 'checkboxColocation', service = 'colocation', label = 'LLocation')
                break;
                
                case "MVNO":
                    verify(texto = '- MVNO/MVNE', id = 'checkboxMVNO', service = 'mvno', label = 'LMvno')
                break;

                case "CELULAR":
                    verify(texto = '- Celular empresarial', id = 'checkboxCELULAR', service = 'celular', label = 'LCelular')
                break;

                case "HARDWARE":
                    verify(texto = '- Outsourcing de Harwdware', id = 'checkboxHARDWARE', service = 'hardware', label = 'LHardware')
                break;
            }
    }
    
    
    function create(texto, id){ 
        let div = numberInputElementCreator2('div', 'align-items-center', id)
        let label = numberInputElementCreator2('label', 'labelServices', id, texto)  
        select.append(div)
        div.append(label)     
    }
    
       btn.addEventListener('click', function(){
        let title = document.querySelector('#title')
        let listString = selectLista.toString(); 
        title.value = "Serviços selecionados: " + listString
        console.log("test btn")
    })


    function validServiceFunction(){
        if(selectLista.value != null){
            validService = true;
        }else{
            validService = false;
        }
    }
    
