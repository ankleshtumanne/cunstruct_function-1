function Book(t,ge,au,pr){
    this.tittle=t;
    this.genre=ge;
    this.Author=au;
    this.price=pr
}

function Author(n,by,na){
    this.name=n;
    this.BirthYear=by;
    this.Nationality=na;
    
}

let p2=new Author("anklesh",2001,"indian")
// console.log(p2)

Book.prototype.getbookinfo=function(){
    console.log("tittle :",boook.tittle )
    console.log("Author's name :",boook.Author.name )
    console.log("genre :",boook.genre )
    console.log("price :",boook.price )
}

let boook=new Book("richDad","anku",p2,1000)
// console.log(boook)

boook.getbookinfo()