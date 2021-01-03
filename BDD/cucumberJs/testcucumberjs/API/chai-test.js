var chai = require('chai');
var chaiHttp = require('chai-http');

function test_request(){

chai.use(chaiHttp)
let app = 'https://www.sbs.com.au';
chai.request(app)
    .get('/guide/ajax_radio_program_catchup_data/')
    .end((error,res)=>{
        if (error){
            console.log(error)
        }else{
            chai.assert.equal(res.status,200,'Response was not ok');
            var obj  = JSON.parse(res.text);
            var obj  = JSON.parse(res.text);
            for (var i=0;i<obj.length;i++){
                console.log("=>"+JSON.stringify(obj[i]));
                console.log("=>..."+i+" "+obj[i].label)
            }

        }
    })
}

test_request()