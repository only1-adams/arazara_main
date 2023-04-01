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
			document.body.style.overflow = "hidden";
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
space in our country, Nigeria. <br /> <br />
However, we find that an empowered Youth / Student has the competence to cope with the
challenges of life, using available resources to overcome these challenges. <br /> <br />
We feel it is necessary to put on record the key  elements of the T-3H philosophy in learning,
while ARAZARA will impact on your students in particular and the school in general.
To discover the truths about knowledge or idea in the HEAD - mind and intellect.<br /> <br /> This will
prompt students to be analytical and raise questions on any idea or opinion discussed or taught
both in and outside the classroom.<br /> <br />
HEART - Prompts the students not to be indifferent to the events or activities happening around
their environment. Always to have a positive influence on the direction or flow of events and
activities.<br /> <br />
CREATIVE HANDS -  Prompt students to be pragmatic i.e pay attention to what works or how to
solve problems, therefore, use their hands to do things, solve problems, resolve tasks and
produce results. Key thing is do not just be satisfied with “knowing” only, strive to know “How
to do” always endeavor to demonstrate “I can do it with my hands”.<br /> <br />
END RESULT - Enables the students to think creatively, nurture talents and skills, and develop
initiatives; boost self confidence in whatever they undertake and make them in a socially

responsible way, thereby creating job opportunities, ensuring social justice and stimulating the
economy of Nigeria. <br /> <br />
We at Arazara Consulting believe that this will take learning many light years ahead.<br /> <br />
Being part of the give back &quot;Skills Development&quot; for schools, having partnered with Rozaville
Skills limited in order to ameliorate the hardship suffered by the youths on account of the
apparent lack in the education and employment opportunities of these vulnerable group.<br /> <br />
As an extension to the school’s academic curriculum, our engagement  fills the wider
curriculum programs through Entrepreneurial Skills Education Programs (CESEP), a training and
mentoring option based on hands-on on various skills.<br /> <br /> The result we hope will be to develop
confident, well rounded, happy children who will become successful world citizens.<br /> <br /> We also
offer support solutions that unlock the potentials of the youths, especially in profiled clusters –
both in schools or the general market place. <br /> <br />
These clusters are subjected to intense training and mentoring in order to expand their vision
and spirit of enterprise.<br /> <br />
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
in the  rural areas. <br /> <br />
Poor menstrual hygiene can cause fungal infections, repeated infections, cervical cancer
and they become vulnerable to infertility.<br /> <br /> Unfortunately reproductive hygiene education
and sexual education is not part of educational curriculum in Nigeria. <br /> <br />
Nursing mothers in the rural areas practice the unhygienic behaviours of their mothers and
grandmothers for years and do not see any harm in using old cloths which are unsafe on
baby skin, generates excessive leakage and are very uncomfortable. <br /> <br />
Thus our duty to patronize made in Nigeria organic/biodegradable Sanitary pads and natural
essence diapers (to avoid odour and relieve discomforts) is a way of helping to build our
already battered economy which the Government is one of the major promoters of this
objective
Our mission is to build capacity by making health products, which are essential necessities,
affordable and accessible to all girl child and women in the rural areas. <br /> <br />
We have succeeded in sealing the signing up of all necessary supply channels with
assurance that demands a long term and regular basis inflow of supplies. <br /> <br />
Commitment to Community Social Responsibility and an alignment with government and
government agencies, International institutions, corporate bodies, educational institutions,
non-governmental Organisations and high net worth Individuals who serve or seek to serve
the CSR initiative with programs, projects and ideas.`,
		},
		dmw: {
			title: `DMW” Initiative`,
			content: `Dance has always been an integral part of daily life in Nigeria but has had unrecognized talent
behind it.<br /> <br /> In recent years, it has been rich in innovations and connections keeping our cultural
traditions alive, recognizing it’s artistry and expressiveness.<br /> <br /> AFRO DANCE is the new form of
respectability and popularity, making it’s impact on the global performing industry.<br /> <br />
At Arazara, we serve as a hands on consultant with “DWM” building the young people to value
heritage more, inspiring their minds for the future, giving them the ability for growth to
become an investment model in people and the industry through their passion and talent,
giving them choices and better information on how to implement and carry on their content,
that way we instill buy-in for each content creator through dance to invest in themselves and to
value themselves.<br /> <br />
We are working closely with dance creators, Afro dance instructors, Afro dance Writers and
Lyrical dancers because Dance which is “Discipline- Attitude-New-Confidence-Expression”, not
only increases your social confidence, it improves your fitness, your posture and coordination.<br /> <br />
At Arazara your wellness is our priority. `,
		},

		training: {
			title: "TECH Products & Training",
			content: `
					Our mission is to be the prime Tech Solution. Teaching
technological knowledge and the technical knowhow,
supporting solutions that unlock and enhance the innovative
and productive energies of Tech developers / uplifting
communities and empowering them in the web 3 space and the
metaverse.  <br /> <br />
We offer User Experience design courses but are not limited to the
following ; <br /> <br />
<ul class="px-8 list-decimal text-[1.7rem] font-semibold text-customBlack flex flex-col gap-8">
<li>Introduction</li>
<li>Basic principles of design (reCAP)</li>
<li>How to interpret project brief</li>
<li>Designing a user flow/story</li>
<li>Wire frames</li>
<li>User interface design - App</li>
<li>User interface design - Web</li>
<li>Prototyping</li>
<li>Working with developers</li>
<li>Working with clients</li>
<li>Portfolio management</li>
<li>Career opportunities in UI/UX</li>
</ul>
				`,
		},
		msmes: {
			title: "MSMEs Capacity Building",
			content: `
					A well defined and effectively delivered capacity building
program is a risk management fundamental for any credit
platform designed for SMEs in Nigeria. SMEs can be described
as &quot;POTENTIALLY VERY RICH BUT NEEDING TECHNICAL
FINANCIAL AND MANAGERIAL SUPPORT TO ATTAIN SUCH
POTENTIALS&quot;.<br /> <br />

SMEs are the engine of growth in all global upwardly mobile
Economies. SMEs in Nigeria however, face special challenges
which have stunted their growth for decades. Such challenges
include poor management skills, limited technical skills, limited
access to Funds, poor infrastructure facilities, lack of access to
market, government policy inconsistencies to mention but a
few. These make them very unattractive to funding institutions
such as financial institutions, commercial banks, venture
capitalists, leasing organizations and micro-finance institutions.<br /> <br />

Documentation is still a problem and most of them cannot
produce bankable business plans. On top of their myriads of
problems are lack of management knowledge and funding. <br /> <br />

The Lead Consultant of Arazara Consulting has since 2005 been
a coordinator to Business Development Services Provider
(BDSP) of financial institutions and duly served her interest in
the South-East from 2005 to 2008. Her strategies for SME
clusters business development include; <br /> <br />

Strategy A: Membership Enumeration and Categorization of
citizens are as follows;<br /> <br />

<ul class="px-8 list-disc text-[1.7rem] font-semibold text-customBlack flex flex-col gap-8">
<li>CAC Registration status</li>
<li>Business plan availability</li>
<li>NAFDAC registration for products availability</li>
<li>Regulatory compliance (Tax, Staff Group Life Insurance and
Pension contribution)</li>
<li>Credit acquisition and repayment compliance capability</li>
<li>Membership of group association</li>
<li>Degree of existence of conflicts with group members</li>
</ul> <br /> <br />

Strategy B: Capacity Building on Operations working with the
cluster leaders to segment members for capacity building
according to their strengths and weaknesses. Capacity building
will address the following; <br /> <br />

<ul class="px-8 list-disc text-[1.7rem] font-semibold text-customBlack flex flex-col gap-8">
<li>Support the capability of members to make existing business
plans bankable</li>
<li>Support the capability of members to institute inventory
management plans that optimize turnover while reducing
losses</li>
<li>Support the capability of members to keep proper books of
account and manage cash and credit purchases</li>
<li>Support the capability of members to access credit from
regular deposit banks, development banks such as
Development Bank of Nigeria (DBN) and multilateral
institutions such as UNIDO</li>
<li>Support the introduction or improvement on corporate time
management</li>
<li>To cross check regulatory compliances and ensure the
elimination of all activities that may lead to sanctions</li>
</ul><br /> <br />

Strategy C: Capacity Building on Marketing upon evaluation of
all product development strategies; <br /> <br />

<ul class="px-8 list-disc text-[1.7rem] font-semibold text-customBlack flex flex-col gap-8">
<li>Support cluster members to ensure the core products meet
the requirements of consumers</li>
<li>Support members to ensure standard qualities are created
and sustained</li>
<li>Support members to re-evaluate packaging to reflect the
desire of the customer</li>
<li>Support cluster members to define their market space so that
efforts can be put in developing them</li>
<li>Support cluster members to ensure that distribution channels
are not fraught with risks that ruin the business (eg: dealing
with smugglers)</li>
<li>Support the members to develop individual or group brands
that must be jealously protected</li>
</ul><br /> <br />

Strategy D: Confidence Building;
<br /> <br />

<ul class="px-8 list-disc text-[1.7rem] font-semibold text-customBlack flex flex-col gap-8">
<li>Support cluster members to go for state, regional and
national exhibitions</li>
<li>Support members to have mentors who they regularly
communicate with especially at times of challenges</li>
<li>Encourage members to open up to Arazara Consulting for all
necessary counseling.</li>
</ul><br /> <br />

At Arazara Consulting, we create well tailored capacity building
program that covers different clusters and locations with
emphasis on business sensitization, management practice, ICT
applications, market access, finance access, branding, taxation,
legal and ethical matters etc to avoid the consequences of the
lack of pre-commencement counseling for startups and lack of
clinic support by proven SME managers.
				`,
		},

		youth: {
			title: "Youth Development Training",
			content: `
					UNESCO have revealed that the young people (ages 15-24) who
represent the world’s most dynamic human resources are
almost three times more likely to be unemployed than adults.
In 2022, 12.7 percent of African youth were unemployed.
Therefore, skills development in young people is more important than ever.
At Arazara, we encourage young people to
develop their professional skills. <br /> <br />
We focus on teaching the youths the business operations
element of setting up any venture. It is aimed at ensuring that
the youths go beyond just acquiring skills /vocations to being
able to ensure that their businesses are sustainable because
they are properly managed and run. This element is vital
because of the high failure rate of conventional vocational or
skills acquisition programs due to the mobility of beneficiaries
to manage their business ventures properly. <br /> <br />
We will also inculcate the SMEs capacity building methodology
for the youths as a takeaway; Business counseling, mentoring
monitoring and general advisory services after they have
acquired the skills to enable them have in-depth knowledge on
how to use business acumen to drive the skills acquired for
success, making them independent to enable them stay clear of
violence and social vices.<br /> <br />
Arazara run the following programs on the sponsorship of
individual social investors, government and multilateral
agencies; <br /> <br />
<ul class="px-8 list-decimal text-[1.7rem] font-semibold text-customBlack flex flex-wrap gap-8">
<li>E-commerce</li>
<li>How to begin a small business successfully</li>
<li>Skills in identifying business opportunity</li>
<li>Preparing and writing business plans</li>
<li>Accounts and book-keeping for a small business</li>
<li>Acquisition and repayment of credit</li>
<li>Business financial management</li>
<li>SME’s and corporate taxation</li>
<li>Ethics, legal and regulatory matters in a small business</li>
<li>Business and project appraisal</li>
<li>Business operation management</li>
<li>Social needs and employee relations</li>
<li>Legal issues and their applications</li>
<li>Understanding key areas of the climate crisis
On skills Development programs:
We run an internship program with several skilled operators in;</li>
<li>Coding</li>
<li>Allied products</li>
<li>Footwear and leather works</li>
<li>Photography and video editing</li>
<li>Hair dressing / Barbing</li>
<li>Event management / venue decoration</li>
<li>Confectionary</li>
<li>plumbingy</li>
<li>Garment making</li>
<li>• Paint production and application</li>
<li>Carpentry and wood works</li>
<li>Fascinator / hats making</li>
<li>GSM repairs</li>
<li>Block moulding</li>
<li>Beads making</li>
</ul> <br/> <br/>
Internship is arranged subsequent to entrepreneurship training
				`,
		},
		corporate: {
			title: "Corporate Management Skills Training",
			content: `
					At Arazara, we create an atmosphere suited for senior
managers, managers, bank officers, and anybody , who has to
get results with time. We enable individuals acquire the skills of
creative thinking for innovative management processes and to
develop new products, and function more creatively. We teach
them the rules guiding marketing new clients and how to bring
new businesses into their companies. We make individuals
sharpen their skills for new responsibilities to be current, tough
and competent on their jobs. <br /> <br />
We get them well equipped to face their new challenges,
identifying traits and managing traits for best results.<br /> <br />
Courses are either open or inplant depending on the objectives
of the customer. Some of the courses more regularly run
include; 
<ul class="px-8 list-decimal text-[1.7rem] font-semibold text-customBlack flex flex-wrap gap-8">
<li>Improving creativity and innovativeness in Managers</li>
<li>Strategic customer service management</li>
<li>Front office and customer relations skills</li>
<li>Developing successful communication skills in business</li>
<li>Managing Branch/Life Agency for profitability</li>
<li>Developing effective presentation skills</li>
<li>Developing Proper book-keeping and accounting skills</li>
<li>Building high performance teams</li>
<li>Skills in identifying business opportunities</li>
<li>Developing time management skills</li>
<li>Business proposal writing skills</li>
<li>Management skills for personal assistants of corporate
executives</li>
<li>Effective skills for project supervisors</li>
<li>Retirement planning skills for the self employed</li>
<li>Steps for happy retirement after thirty five years in
government service</li>
<li>Effective branch office management and control skills</li>
<li>Skills for managing the security of the office technology
infrastructure</li>
</ul> <br/> <br/>
				`,
		},
		docs: {
			title: "Documentary , Research and Advocacy",
			content: `
					The company is engaged in SMEs storyline documentaries, 
research and publicity that support the individual, country and
global efforts aimed at breaking the cycle of poverty through
social investing.
<br/> <br/>
Arazara Consulting in terms of showcasing SMEs Clusters
stories  focuses on providing the awareness and information on
the areas of need through advocacy. <br/> <br/>Our documentaries  have
encouraged individuals and organizations to approach us with
the intentions for detailed comparative programs, formulations
and budgeting.<br/> <br/> In most cases, the company undertakes the
sensitization of the target group ahead of the intervention
program.<br/> <br/>

In years, we have researched and scoped communities and
groups for social investment purposes, helping to structure
operation and economic opportunities to them.
				`,
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
