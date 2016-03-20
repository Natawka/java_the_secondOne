

  function addWrapper () {
  var element = document.createElement('div');
  element.className = 'wrapper';
  document.body.appendChild(element);
}

function addTopic () {
  var subelement = document.createElement('div');
  subelement.className = "name";
  var parent = document.querySelector('.wrapper');
  parent.appendChild(subelement);
}

function addP () {
  var word = document.createElement('p');
  word.innerHTML = "Тест по программированию";
  var parent = document.querySelector('.name');
  parent.appendChild(word);
}


addWrapper();

addTopic();

addP();

function addQuestion() {
        var questionWord = document.createElement('h3');
        questionWord.className="test_question";
        questionWord.innerHTML = 'Вопрос №1';
        var parent = document.querySelector('.wrapper');
        parent.appendChild(questionWord);
};
addQuestion();

// The first UL-list

function addUl () {
  var lik1 = document.createElement('ul');
  lik1.className="my_ul";
  var parent = document.querySelector('.wrapper');
  parent.appendChild(lik1);
};
addUl ();

// First LI

function addLi () {
	var newLink = document.createElement('li');
	newLink.className="my_li";
	var parent = document.querySelector('.my_ul');
  parent.appendChild(newLink);
	
}
addLi ();
function addImput () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li');    
    parent.appendChild(checkB);
	    	
};
addImput();

function addAnswerName () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №1";
	    var parent = document.querySelector('.my_li');
        parent.appendChild(title);
console.log(title);		
};
addAnswerName();

// Second LI

function addLiLi () {
	var newLink = document.createElement('li');
	newLink.className="my_li2";
	var parent = document.querySelector('.my_ul');
  parent.appendChild(newLink);
	
}
addLiLi ();
function addImputt () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li2');    
    parent.appendChild(checkB);
	    	
};
addImputt();
function addAnswerNameFirst () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №2";
	    var parent = document.querySelector('.my_li2');
        parent.appendChild(title);
   console.log(title);		
};
addAnswerNameFirst();

// Third LI

function addLiLiLi () {
	var newLink2 = document.createElement('li');
	newLink2.className="my_li3";
	var parent = document.querySelector('.my_ul');
  parent.appendChild(newLink2);
	
}
addLiLiLi ();
function addImp() {
    var checkBB = document.createElement('input');
    checkBB.setAttribute("type", "checkbox");
    checkBB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li3');    
    parent.appendChild(checkBB);
	    	
};
addImp();

function addAnswer () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №3";
	    var parent = document.querySelector('.my_li3');
        parent.appendChild(title);
   console.log(title);		
};
addAnswer();

// the SEcond UL-list

function addQuestion2() {
        var questionWord = document.createElement('h3');
        questionWord.className="test_question";
        questionWord.innerHTML = 'Вопрос №2';
        var parent = document.querySelector('.wrapper');
        parent.appendChild(questionWord);
};
addQuestion2();

function addUlList () {
  var lik1 = document.createElement('ul');
  lik1.className="my_ul2";
  var parent = document.querySelector('.wrapper');
  parent.appendChild(lik1);
};
addUlList ();

// First LI for SECOND UL


function addLiSecond () {
	var newLink = document.createElement('li');
	newLink.className="my_li_second";
	var parent = document.querySelector('.my_ul2');
  parent.appendChild(newLink);
	
}
addLiSecond ();
function addImputSecond () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_second');    
    parent.appendChild(checkB);
	    	
};
addImputSecond();

function addAnswerNameSecond () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №1";
	    var parent = document.querySelector('.my_li_second');
        parent.appendChild(title);
console.log(title);		
};
addAnswerNameSecond();

// SECOND LI for SECOND UL


function addLiSecond2 () {
	var newLink = document.createElement('li');
	newLink.className="my_li_second_2";
	var parent = document.querySelector('.my_ul2');
  parent.appendChild(newLink);
	
}
addLiSecond2 ();
function addImputSecond2 () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_second_2');    
    parent.appendChild(checkB);
	    	
};
addImputSecond2();

function addAnswerNameSecond2 () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №2";
	    var parent = document.querySelector('.my_li_second_2');
        parent.appendChild(title);
console.log(title);		
};
addAnswerNameSecond2();

// third LI for SECOND UL


function addLiSecond2_1 () {
	var newLink = document.createElement('li');
	newLink.className="my_li_second_3";
	var parent = document.querySelector('.my_ul2');
  parent.appendChild(newLink);
	
}
addLiSecond2_1 ();
function addImputSecond2_1 () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_second_3');    
    parent.appendChild(checkB);
	    	
};
addImputSecond2_1();

function addAnswerNameSecond2_1 () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №3";
	    var parent = document.querySelector('.my_li_second_3');
        parent.appendChild(title);
console.log(title);		
};
addAnswerNameSecond2_1();

// the third UL-list
function addQuestion3() {
        var questionWord = document.createElement('h3');
        questionWord.className="test_question";
        questionWord.innerHTML = 'Вопрос №3';
        var parent = document.querySelector('.wrapper');
        parent.appendChild(questionWord);
};
addQuestion3();

function addUlList_2 () {
  var lik1 = document.createElement('ul');
  lik1.className="my_ul3";
  var parent = document.querySelector('.wrapper');
  parent.appendChild(lik1);
};
addUlList_2 ();


// First LI for THIRD UL



function addL () {
	var newLink = document.createElement('li');
	newLink.className="my_li_third";
	var parent = document.querySelector('.my_ul3');
  parent.appendChild(newLink);
	
}
addL ();
function addImpThird () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_third');    
    parent.appendChild(checkB);
	    	
};
addImpThird();

function addAnsr () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №1";
	    var parent = document.querySelector('.my_li_third');
        parent.appendChild(title);
console.log(title);		
};
addAnsr();

// Second LI for THIRD UL

function addL_2 () {
	var newLink = document.createElement('li');
	newLink.className="my_li_third_2";
	var parent = document.querySelector('.my_ul3');
  parent.appendChild(newLink);
	
}
addL_2 ();
function addImpThird_2 () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_third_2');    
    parent.appendChild(checkB);
	    	
};
addImpThird_2();

function addAnsr_2 () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №2";
	    var parent = document.querySelector('.my_li_third_2');
        parent.appendChild(title);
console.log(title);		
};
addAnsr_2();

// third LI for THIRD UL

function addL_3 () {
	var newLink = document.createElement('li');
	newLink.className="my_li_third_3";
	var parent = document.querySelector('.my_ul3');
  parent.appendChild(newLink);
	
}
addL_3 ();
function addImpThird_3 () {

    var checkB = document.createElement('input');
    checkB.setAttribute("type", "checkbox");
    checkB.setAttribute("name", "variant");
	var parent = document.querySelector('.my_li_third_3');    
    parent.appendChild(checkB);
	    	
};
addImpThird_3();

function addAnsr_3 () {
	var title = document.createElement('text');
	    title.innerHTML ="Вариант ответа №3";
	    var parent = document.querySelector('.my_li_third_3');
        parent.appendChild(title);
console.log(title);		
};
addAnsr_3();

var but = document.createElement('input');
            but.setAttribute("type", "submit");
            but.setAttribute("value", "Проверить результат");
    var parent = document.querySelector('.wrapper');    
    parent.appendChild(but);