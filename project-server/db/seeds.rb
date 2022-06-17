puts "🌱 Seeding spices..."

# Seed your database here


mso = Instructor.create (
    {
        name: "Ms. Oreo"
    }
)

mrs = Instructor.create (
    {
        name: "Mr. Snickers"
    }
)

msg = Instructor.create(
    {
        name: "Ms. Goodbar"
    }
)

mrp = Instructor.create (
    {
        name: "Mr. Payday"
    }
)
msk = Instructor.create (
    {
    name: "Ms. KitKat" 
}
    )
mrr = Instructor.create (
    {
        name: "Mr. Reeses"
    }
)

mso.courses.create (
    [{ 
        course_name: "Art_1"
        },
        {
        course_name: "Art_2"

        },
        {
        course_name: "Art_3"
        },
        {

        course_name: "Art_4"
        },
        {

        course_name: "Art_5"
        },
        {
        course_name: "Art_6"
        }
    ]
)
mrs.courses.create (
    [{ 
        course_name: "ComputerScience_1",
        class_period: 1
        },
        {
        course_name: "ComputerScience_2",
        class_period:2

        },
        {
        course_name: "ComputerScience_3",
        class_period:3
        },
        {

        course_name: "ComputerScience_4",
        class_period:4
        },
        {

        course_name: "ComputerScience_5",
        class_period:5
        
        },
        {
        course_name: "ComputerScience_6",
        class_period:6
        }
    ]
)
msg.courses.create (
    [{ 
        course_name: "Science_1",
        class_period:1
        },
        {
        course_name: "Science_2",
        class_period:2

        },
        {
        course_name: "Science_3",
        class_period:3
        },
        {

        course_name: "Science_4",
        class_period:4
        },
        {

        course_name: "Science_5",
        class_period:5
        },
        {
        course_name: "Science_6",
        class_period:6
        }
    ]
)
mrp.courses.create (
    [{ 
        course_name: "Math_1",
        class_period:1
        },
        {
        course_name: "Math_2",
        class_period:2

        },
        {
        course_name: "Math_3",
        class_period:3
        },
        {

        course_name: "Math_4",
        class_period:4
        },
        {

        course_name: "Math_5",
        class_period:5
        },
        {
        course_name: "Math_6",
        class_period:6
        }
    ]
)
msk.courses.create (
    [{ 
        course_name: "ELA_1",
        class_period:1
        },
        {
        course_name: "ELA_2",
        class_period:2

        },
        {
        course_name: "ELA_3",
        class_period:3
        },
        {

        course_name: "ELA_4",
        class_period:4
        },
        {

        course_name: "ELA_5",
        class_period:5
        },
        {
        course_name: "ELA_6",
        class_period:6
        }
    ]
)
mrr.courses.create (
    [{ 
        course_name: "HIST_1",
        class_period:1
        },
        {
        course_name: "HIST_2",
        class_period:2

        },
        {
        course_name: "HIST_3",
        class_period:3
        },
        {

        course_name: "HIST_4",
        class_period:4
        },
        {

        course_name: "HIST_5",
        class_period:5
        },
        {
        course_name: "HIST_6",
        class_period:6
        }
    ]
)

ai = Learner.create ({
    name: "Anikin Indy"
})  
ad = Learner.create ({
     name:"Asterix Draven"
})   
bt =Learner.create ({
     name:"Beetlejuice T'Challa" 
}) 
mw=Learner.create ({
    name:"Morticia Wednesday"
}) 
ls=Learner.create ({
     name:"Leia Spock"
}) 
nv=Learner.create ({
     name:"Nala Vesper"
}) 
mp=Learner.create ({
      name:"Mazikeen Popeye"
}) 
bk=Learner.create ({
     name:"Beavis Kratos" 
}) 
gc=Learner.create ({
     name:"Gojira Castiel" 
}) 
ef=Learner.create ({
     name:"Elora Frankenstein" 
}) 
ak=Learner.create ({
      name:"Aang Kal-El" 
}) 
kk=Learner.create ({
   name:"Kal Kilo"  
}) 
zm=Learner.create ({
     name:"Zorro Morron"
}) 
xs=Learner.create ({
    name:"Xena Sonic"
}) 
cm=Learner.create ({
     name:"Castiel Merida" 
}) 
le=Learner.create ({
     name:"Linet Ebeneezer"
}) 
on=Learner.create ({
     name:"Ophelia Norma"
}) 
fl=Learner.create ({
     name:"Figaro Lionel"
}) 
ee=Learner.create ({
    name:"Elmira Eowyn"
}) 
ce=Learner.create ({
    name:"Cymbeline Enide"
}) 
ag=Learner.create ({
     name:"Alladin Galadriel"
}) 
rr=Learner.create ({
     name:"Renesmee Bors"
}) 
iv=Learner.create ({
     name:"Iseut Vivien"
}) 
cc=Learner.create ({
     name:"Caradog Calfia"
}) 
lh=Learner.create ({
     name:"Lalla Haidee"
}) 
bc=Learner.create ({
     name:"Bayard Criseyde"
})    
oa=Learner.create ({
     name:"Olindo Ayla"
}) 
lt=Learner.create ({
     name:"Lancelot Tinuviel"
}) 
ul=Learner.create ({
    name:"Urien Lear"
}) 
ec=Learner.create ({
    name:"Eponine Cordeilla"
    
}) 


puts "✅ Done seeding!"
