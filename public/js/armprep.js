var socket = io();
function sendresponse() {
    var cont = false;
    var loopNum = sessionStorage.getItem("loopNum");
    var exerciseNum = sessionStorage.getItem("exerciseNum");
    socket.on('message',function(data){
        console.log("HERE");
        var html="";
        if(data.message!=null){
            var ready=JSON.parse(data.message);
            if (ready.error1 == "1") {
                cont = true;
            } else if (ready.error1 == 1) {
              cont = true;
            }
            //console.log(obj);
            //alert(scoreresponse);
        }else{
            console.log("Problem",data);
        }

    });
    if (cont) {
      var systemReady="{\"type\" : \"SystemReady\",\"task\" : " +exerciseNum.toString()+"}";
      socket.emit("json", systemReady);
      window.location.assign('/preactivity/')
    }
}
