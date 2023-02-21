init(() => {
	Alpine.data("modal", () => ({
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
