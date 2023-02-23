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
		},

		hideMe() {
			this.open = false;
		},

		setCsr({ title, content }) {
			this.csr.title = title;
			this.csr.content = content;
		},
	}));

	Alpine.data("csr", () => ({
		skills: {
			title: "Skills Development",
			content: `Academic stress, violence, sexual permissiveness, easy drug
					availability abuse and social divide are some of major issues which
					the youths have to contend with in this rapid changing social space in
					our country, Nigeria. However, we find that an empowered Youth /
					Student has the competence to cope with the challenges of life, using
					available resources to overcome these challenges.`,
		},
		sanitary: {
			title: "Organic Sanitary Pad and Natural Essence Diapers Bank",
			content: `The girl child and women's health and hygiene has been one of the key
					concerns in Nigeria. The awareness on menstrual hygiene and usage of
					Sanitary pad is virtually absent especially in the  rural areas.  Poor
					menstrual hygiene can cause fungal infections, repeated infections,
					cervical cancer and they become vulnerable to infertility.
					Unfortunately reproductive hygiene education and sexual education is
					not part of educational curriculum in Nigeria. `,
		},
		dmw: {
			title: `DMW” Initiative`,
			content: `Dance has always been an integral part of daily life in Nigeria but
					has had unrecognized talent behind it. In recent years, it has been
					rich in innovations and connections keeping our cultural traditions
					alive, recognizing it’s artistry and expressiveness. AFRO DANCE is the
					new form of respectability and popularity, making it’s impact on the
					global performing industry. `,
		},
	}));
	Alpine.data("menu", () => ({
		open: false,
		get isOpen() {
			return this.open;
		},
		showMe() {
			this.open = true;
		},
		hideMe() {
			this.open = false;
		},
	}));
});
