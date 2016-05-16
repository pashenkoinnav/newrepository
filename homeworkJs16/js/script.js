/*Поиск*/
$(function() {
   $('.search-form').on('submit', function() {
       var enteredQuery = $('#entered-query').val();
       $.ajax({
           url: "http://api.riffsy.com/v1/search?tag=" + enteredQuery + "&limit=10",
             success: function(data, textStatus) {
               console.log('Success: ', data);
               var ul = document.createElement('ul');
                if (data.results.length == 0) {
                   var li = document.createElement('li');
                   li.classList.add('output-items');
                   li.innerHTML =  '<p>There are no results matching.</p>';
                   ul.appendChild(li);
                }
               $.each(data.results, function(i, val) {
                   var li = document.createElement('li');
                   li.classList.add('output-items');
                   li.innerHTML = 'Result №'+ (i+1) + ': ' +'<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+ '</br>' +'<img class="image-output" src="'+val.url+'">'+"</a>";
                   ul.appendChild(li);
               });
               $('#out-results').html(ul);
           },
           error: function(data, textStatus) {
               console.log('Error: ', data);
           }
       });
       return false;
   });
});
/*Prototypes*/

function Human() {
	this.name =  'Alex';
	this.age = 30;
	this.sex = 'male';
	this.height = 180;
	this.weight = 70;

}

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker () {
	this.job = 'programmer';
	this.salary = '1500$';
	this.method = "Let's work!";
}

function Student (){
	this.univercity = 'Oxford';
	this.grants = '300$';
	this.method = "Let's watch TV serials";
}

worker1 = new Worker();
worker2 = new Worker();

stud1 = new Student();
stud2 = new Student();

console.log (worker1.job);
console.log (worker2.name);
console.log (worker1.height);
console.log (worker2.method);

console.log (stud1.grants);
console.log (stud1.age);
console.log (stud2.method);
console.log (stud2.sex);
