var fabevyStudents = [
    {
        photo: '/talenz/images/my.jpeg',
        Name: 'Rahul',
        Status: 'Fresher from perambalur',
        location: 'chennai',
        Git: 'https://github.com/rahulmahi',
        Resume: '//talenz/resume/rahul-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    },
    {
        photo: '/talenz/images/muthu.jpeg',
        Name: 'Muthu Kumar',
        Status: 'Fresher from perambalur',
        location: 'chennai',
        Git: 'https://github.com/anikumarm123',
        Resume: '/talenz/resume/muthu-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    },
    {
        photo: '/talenz/images/vel.jpeg',
        Name: 'Chithiraivel',
        Status: 'Fresher from perambalur',
        location: 'chennai',
        Git: 'https://github.com/anikumarm123',
        Resume: '/talenz/resume/chithiraivel-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    },
    {
        photo: '/talenz/images/mariselvam.jpeg',
        Name: 'Mari Selvam',
        Status: 'Fresher from perambalur',
        location: 'chennai',
        Git: 'https://github.com/MARISELVAM1234',
        Resume: '/talenz/resume/mariselvam-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE-Agri',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    },
    {
        photo:'/talenz/images/leo.jpeg',
        Name: 'Leo',
        Status: 'Fresher from perambalur',
        location: 'Surandai',
        Git: 'https://github.com/anikumarm123',
        Resume: '/talenz/resume/leo-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    },
    {
        photo: '/talenz/images/alphanse.jpeg',
        Name: 'Alphanse',
        Status: 'Fresher from alangulam',
        location: 'Alangulam',
        Git: 'https://github.com/anikumarm123',
        Resume: '/talenz/resume/alphanse-resume.pdf',
        PrimarySkills: 'Html, Css, JavaScript, React JS.',
        SecondarySkills: 'Visual Studio Code, Git',
        Education: {
            college: 'BE',
            HSC: 'HSC - State Board - 2016 - 70%.',
            SSLC: 'SSLC - State Board - 2014 - 85%.',
        },
        ExpectedSalary: '2.5L',
        AvailabilityToJoin: 'immediate'
    }
];

var parent_div;

var mains_div = document.createElement('div');
mains_div.className = 'mains_flex';
console.log(mains_div);
document.body.append(mains_div);

fabevyStudents.forEach(students);

function students(student) {

    var main_div = document.createElement('div');
    main_div.className = 'parent';

    var child1_div = document.createElement('div');
    var img = document.createElement('img');
    img.className = 'fabevy_image'
    img.src = student.photo;
    child1_div.append(img);

    var child2_div = document.createElement('div');
    child2_div.className = 'child-2'
    var head = document.createElement('h2');
    head.textContent = student.Name;
    var tit_1 = document.createElement('p');
    tit_1.textContent = student.Status;
    var tit_2 = document.createElement('h3');
    tit_2.textContent = student.location;
    child2_div.append(head, tit_1, tit_2);

    var child3_div = document.createElement('div');
    var git = document.createElement('a');
    git.setAttribute('href', student.Git);
    git.target = '_blank';
    var icon_1 = document.createElement('i');
    icon_1.setAttribute('class', 'fa fa-github');
    git.append(icon_1);

    var git_1 = document.createElement('a');
    git_1.href = student.Resume;
    git_1.target = '_blank';
    var icon_2 = document.createElement('i');
    icon_2.setAttribute('class', 'fa fa-file');
    git_1.append(icon_2);


    child3_div.append(git, git_1);

    main_div.append(child1_div, child2_div, child3_div);

    // console.log(main_div);
    var second_box = document.createElement('div');
    second_box.className = 'third_box';
    var second_boxs = document.createElement('div');
    second_boxs.className = 'second_1';
    var second_head1 = document.createElement('h2');
    second_head1.textContent = 'Primary Skills';
    var second_para = document.createElement('p');
    second_para.textContent = student.PrimarySkills;
    var second_head2 = document.createElement('h2');
    second_head2.textContent = 'Secondary Skills';
    var second_para1 = document.createElement('p');
    second_para1.textContent = student.SecondarySkills;
    var second_head3 = document.createElement('h2');
    second_head3.textContent = 'Expected Salary';
    var second_para2 = document.createElement('p');
    second_para2.textContent = student.ExpectedSalary;
    second_boxs.append(second_head1, second_para, second_head2, second_para1, second_head3, second_para2);

    var third_box = document.createElement('div');
    third_box.className = 'second';
    var third_boxs = document.createElement('h2');
    third_boxs.textContent = 'Education';
    var third_para1 = document.createElement('p');
    third_para1.textContent = student.Education.college;
    var third_para2 = document.createElement('p');
    third_para2.textContent = student.Education.HSC;
    var third_para3 = document.createElement('p');
    third_para3.textContent = student.Education.SSLC;
    var third_head = document.createElement('h2');
    third_head.textContent = 'AvailabilityToJoin';
    var third_para4 = document.createElement('p');
    third_para4.textContent = student.AvailabilityToJoin;
    third_box.append(third_boxs, third_para1, third_para2, third_para3, third_head, third_para4);
    second_box.append(second_boxs, third_box);
    parent_div = document.createElement('div');
    parent_div.className = 'parents';
    parent_div.append(main_div, second_box);
    mains_div.append(parent_div);
}
 var btn = document.querySelector('#btn');

 btn.addEventListener('click',form_fill);

 function form_fill(){

    var divi = document.createElement('div');
    divi.className = 'divi';

    var h2 = document.createElement('h2');
    h2.textContent = 'Hire Our Traineees';

    var p = document.createElement('p');
    p.textContent = 'Please provide your details, our HR will touch base with you.'

    divi.append(h2,p);
    console.log(divi);
    document.body.append(divi);
}

 var select = document.querySelector('#main-select');
 select.setAttribute('onchange','btn3(this.value)');

 var opt_group = document.createElement('optgroup');

 opt_group.setAttribute('label','gradutes');

 var opt_gra = document.createElement('option');
 opt_gra.textContent = 'Gradutes';

 var opt_be = document.createElement('option');
 opt_be.textContent = 'BE';

 var opt_bca = document.createElement('option');
 opt_bca.textContent = 'BCA';

 var opt_be_agri = document.createElement('option');
 opt_be_agri.textContent = 'BE-Agri';

 opt_group.append(opt_gra,opt_be,opt_bca,opt_be_agri);

select.append(opt_group);

function btn3(val){
    // console.log(val);
    mains_div.innerHTML = '';
    function second_fun(data)
    {
           var datas = data; 
        //   console.log(datas.Education.college);
           if(val == datas.Education.college)
           {
            // console.log(val);
            students(data);
           }
    }
    fabevyStudents.forEach(second_fun)
}



