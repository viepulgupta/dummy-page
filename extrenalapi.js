//let myfbtoken;
$(document).ready(()=>
{
//myfbtoken=prompt("enter the fb token you have been provided with:");

//if(myfbtoken=='')
//{
    //alert("enter a valid token")

//}

//else{
    getalldata();
//}
});

let getalldata=()=>{

    $.ajax(
        {
            type:"GET",
            datatype:"json",
            async:"true",
            url:"http://api.open-notify.org/astros.json",            
        success:(response)=>{
               $('#showdata').css("display","box");
                let allpeople=response.people
                for (x of allpeople)
                {
                    let temprow=`<div class="row">
                                    <div class="col">${x.name}<div>
                                    <div class="col">${x.craftname}</div>
                                    </div>`
                $("#showdata").append(temprow);
                                }
                       },

            error:(err)=>{
                alert("some error occured while loading data from api"),
                    console.log(err.message);
                        }       
})
}