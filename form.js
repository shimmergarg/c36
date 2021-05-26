class Form{
    constructor(){}
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(350,100)
        var input=createInput("name")
        input.position(350,160)
        var button=createButton("play")
        button.position(350,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            var greeting=createElement("h3")
            greeting.html("hello"+name)
            greeting.position(130,160)

        })
    }

}