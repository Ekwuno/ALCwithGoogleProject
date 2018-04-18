
//placeHolder 
var addressBook = (function(){
    var people = [{
        firstName : 'Obinna',
        lastName: 'Ekwuno',
        phone: '12345678',
        email: 'example@gmail.com'

    }];

    
    var table = $('#table');
    var tbody = table.find('tbody');
    var $firstName = table.find('#firstName');
    var $lastName = table.find ('#lastName');
    var $phone = table.find('#phone');
    var $email = table.find('#email');
    var $button = table.find('#add');
    var $buttonSave = table.find('#save');
    var $buttonEdit = table.find('#edit');
    var $buttonRemove = table.find('#remove');
    var $input = table.find(".edit");

    //event 
    $button.on ( 'click', addPerson );
    table.on('click', '#remove', deletePerson);
    //console.log($input);
    _render();

    //render
    function _render() {
        tbody.html('');
        var length = people.length;
        for (var i = 0; i < length; i++){
            table.append('<tr><td><input class= "edit" type = "text" value = "' + people[i].firstName + '" ></td><td><input type = "text" class= "edit" value = "' + people[i].lastName + '"></td><td><input type = "number" class= "edit" value = "'+ people[i].phone + '"></td><td><input type="email" class = "edit" value = "'+people[i].email + '"></td> <td> <button id= "remove" >Delete</button></td></tr>');
        }

        }
    //custom 
    function addPerson(){
        var person = {
            firstName: $firstName.val(),
            lastName:$lastName.val(),
            phone: $phone.val(),
            email: $email.val()
        };
            people.push(person);
            $firstName.val('');
            $lastName.val('');
            $phone.val('');
            $email.val('');
            console.log(person);
            _render()
    }

    //this deletes the input 
    function deletePerson(event) {
        var element = event.target.closest('tr');
        var i = table.find('td').index(element);
        people.splice(i,1);
        _render();
    }

    return{
        addPerson: addPerson,
        deletePerson: deletePerson
    };
        })();
        