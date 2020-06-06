function whosPaying(names) {
    var num_people = names.length;
    var random_person_position = Math.floor(Math.random() * num_people);
    var random_person = names[random_person_position];
    
    return random_person + " is going to buy lunch today!";
}
