(function(){

  $(function(){

    let apiURL = "http://localhost:1337/ciders";
    let tbody = $('#ciders');
    let deleteButton;

//get api and populate table
    function getCiders(){
      $.get(apiURL, function(data){
          for (let i = 0; i < data.length; i++){
            tbody.append(`
              <tr>
                <td>${data[i].id}</td>
                <td>${data[i].ciderName}</td>
                <td>${data[i].percent}%</td>
                <td>${data[i].isApple}</td>
                <td>${data[i].location}</td>
                <td><a href="${data[i].corpSite}">${data[i].ciderName} Website</a></td>
                <td>${data[i].myRating}</td>
                <td><input type="submit" value="Delete" class="deleteButtons" data-ciderid="${data[i].id}"></td>
              </tr>
                `);



          }
      });
    }
//runs function
getCiders();

//when a delete button is clicked, add url extension with ID number
      tbody.on("click", ".deleteButtons", function(e){
        let selectedID = "/"+$(this).data("ciderid");

//select the api url + selected  button's ID and delete
        $.ajax({
            url: apiURL+selectedID,
            type: 'DELETE',
            success: function(result) {
                alert("Successfully Deleted");
  //clear table
                tbody.html("");
  //rerun function to display updated table
                getCiders();
            }
        });


      })
//grabs button and form
      let addCiderButton = $("#addCiderButton");
      let addCiderForm = $("#addCiderForm");

//when add button is clicked
      addCiderButton.on("click", function(event) {
        event.preventDefault();
//serialize input
        let formInput = addCiderForm.serialize();

//put serialized input into api
          $.ajax({
              type: 'POST',
              url: apiURL,
              data: formInput,
              success: function(result) {
                  alert("Successfully Added");
    //clear table
                  tbody.html("");
    //clear input fields
                  addCiderForm[0].reset();
    //rerun function to display updated table
                  getCiders();
              }

        });


      });




  });

})();
