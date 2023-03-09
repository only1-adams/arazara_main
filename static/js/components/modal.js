init(() => {
	Alpine.data("modal", () => ({
		open: false,
		csr: {
			title: "",
			content: "",
		},
		get isOpen() {
			return this.open;
		},

		showMe() {
			this.open = true;
			document.body.style.overflow = "hidden"
		},

		hideMe() {
			this.open = false;
			document.body.style.overflow = "auto";
		},

		setCsr({ title, content }) {
			this.csr.title = title;
			this.csr.content = content;
		},
	}));

	Alpine.data("csr", () => ({
		skills: {
			title: "Skills Development",
			content: `Academic stress, violence, sexual permissiveness, easy drug availability abuse and social divide
are some of major issues which the youths have to contend with in this rapid changing social
space in our country, Nigeria.
However, we find that an empowered Youth / Student has the competence to cope with the
challenges of life, using available resources to overcome these challenges.
We feel it is necessary to put on record the key  elements of the T-3H philosophy in learning,
while ARAZARA will impact on your students in particular and the school in general.
To discover the truths about knowledge or idea in the HEAD - mind and intellect. This will
prompt students to be analytical and raise questions on any idea or opinion discussed or taught
both in and outside the classroom.
HEART - Prompts the students not to be indifferent to the events or activities happening around
their environment. Always to have a positive influence on the direction or flow of events and
activities.
CREATIVE HANDS -  Prompt students to be pragmatic i.e pay attention to what works or how to
solve problems, therefore, use their hands to do things, solve problems, resolve tasks and
produce results. Key thing is do not just be satisfied with “knowing” only, strive to know “How
to do” always endeavor to demonstrate “I can do it with my hands”.
END RESULT - Enables the students to think creatively, nurture talents and skills, and develop
initiatives; boost self confidence in whatever they undertake and make them in a socially

responsible way, thereby creating job opportunities, ensuring social justice and stimulating the
economy of Nigeria.
We at Arazara Consulting believe that this will take learning many light years ahead.
Being part of the give back &quot;Skills Development&quot; for schools, having partnered with Rozaville
Skills limited in order to ameliorate the hardship suffered by the youths on account of the
apparent lack in the education and employment opportunities of these vulnerable group.
As an extension to the school’s academic curriculum, our engagement  fills the wider
curriculum programs through Entrepreneurial Skills Education Programs (CESEP), a training and
mentoring option based on hands-on on various skills. The result we hope will be to develop
confident, well rounded, happy children who will become successful world citizens. We also
offer support solutions that unlock the potentials of the youths, especially in profiled clusters –
both in schools or the general market place. 
These clusters are subjected to intense training and mentoring in order to expand their vision
and spirit of enterprise.
Arazara is a full-fledged MSMEs Capacity Building establishment associated with skills
empowerment outfits and we provide mentorship and training in some of the following agreed
skills: <br/> <br/> <ul class="px-8 list-disc text-[1.7rem] font-semibold text-customBlack flex flex-wrap gap-8">
<li>Cosmetology</li>
<li>Bead making</li>
<li>Fashion designing</li>
<li>Hair dressing</li>
<li>Barbing</li>
<li>Paint making and painting</li>
<li>ICT, Web design and coding</li>
<li>Shoe making</li><li>Hat and Fascinator</li>
<li>Make-Over &amp; Gele/ Manicure &amp; Pedicure</li>
<li>Catering/ Confectioneries/ Small chops</li>
<li>Fish farming</li><li>Carpentry</li>
<li>Events Management and venue decoration</li>
<li>Photography and Photo editing</li>
<li>Videography and video editing</li>
<li>Choreography</li><li>Allied products – Perfume/Insecticide /Air – freshner / Toilet wash/ Dettol/ All
purpose Liquid Soap and Bath liquid soap making.</li>
</ul>`,
		},
		sanitary: {
			title: "Organic Sanitary Pad and Natural Essence Diapers Bank",
			content: `The girl child and women&#39;s health and hygiene has been one of the key concerns in Nigeria.
The awareness on menstrual hygiene and usage of Sanitary pad is virtually absent especially
in the  rural areas. 
Poor menstrual hygiene can cause fungal infections, repeated infections, cervical cancer
and they become vulnerable to infertility. Unfortunately reproductive hygiene education
and sexual education is not part of educational curriculum in Nigeria. 
Nursing mothers in the rural areas practice the unhygienic behaviours of their mothers and
grandmothers for years and do not see any harm in using old cloths which are unsafe on
baby skin, generates excessive leakage and are very uncomfortable. 
Thus our duty to patronize made in Nigeria organic/biodegradable Sanitary pads and natural
essence diapers (to avoid odour and relieve discomforts) is a way of helping to build our
already battered economy which the Government is one of the major promoters of this
objective
Our mission is to build capacity by making health products, which are essential necessities,
affordable and accessible to all girl child and women in the rural areas. 
We have succeeded in sealing the signing up of all necessary supply channels with
assurance that demands a long term and regular basis inflow of supplies. 
Commitment to Community Social Responsibility and an alignment with government and
government agencies, International institutions, corporate bodies, educational institutions,
non-governmental Organisations and high net worth Individuals who serve or seek to serve
the CSR initiative with programs, projects and ideas.`,
		},
		dmw: {
			title: `DMW” Initiative`,
			content: `Dance has always been an integral part of daily life in Nigeria but has had unrecognized talent
behind it. In recent years, it has been rich in innovations and connections keeping our cultural
traditions alive, recognizing it’s artistry and expressiveness. AFRO DANCE is the new form of
respectability and popularity, making it’s impact on the global performing industry.
At Arazara, we serve as a hands on consultant with “DWM” building the young people to value
heritage more, inspiring their minds for the future, giving them the ability for growth to
become an investment model in people and the industry through their passion and talent,
giving them choices and better information on how to implement and carry on their content,
that way we instill buy-in for each content creator through dance to invest in themselves and to
value themselves.
We are working closely with dance creators, Afro dance instructors, Afro dance Writers and
Lyrical dancers because Dance which is “Discipline- Attitude-New-Confidence-Expression”, not
only increases your social confidence, it improves your fitness, your posture and coordination.
At Arazara your wellness is our priority. `,
		},
	}));
	Alpine.data("menu", () => ({
		open: false,
		get isOpen() {
			return this.open;
		},
		showMe() {
			this.open = true;
			document.body.style.overflow = "hidden";
		},
		hideMe() {
			this.open = false;
			document.body.style.overflow = "auto";
		},
	}));
});
