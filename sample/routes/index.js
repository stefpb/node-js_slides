
/*
 * GET home page.
 */
questions = [
"Wie bist du auf uns auf uns aufmerksam geworden?",
"Wie findest du Live-Coding-Elemente innerhalb eines Vortrages?",
"Hast Du Erfahrungen mit node.js / AngularJS?",
"Soll es weitere Vorträge über node.js / AngularJS geben?",
"Wenn Du einen Vortrag machen würdest, wie wäre der Titel deines Themas?",
"Clientseitige MVC-Frameworks wie AngularJS, ember.js, Knockout oder Backbone findest Du interessant?",
"Was wären mögliche weitere Vorträge, die Dich interessieren?"
];

var answers = []; 

exports.index = function(req, res) {
	console.log(req.body);
	if (req.body.q) {
		answers.push(req.body.q);
		res.redirect('/');
	}
	console.log(answers);
  res.render('index', { title: 'WEPB', questions: questions, answers: answers });
};