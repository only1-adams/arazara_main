init(() => {
	Alpine.data("slide", () => ({
		slideNext(mainContainer, testimonialContainer) {
			const gap = 20;
			const width = mainContainer.offsetWidth;
			mainContainer.scrollBy(width + gap, 0, "smooth");

			setTimeout(() => {
				if (
					testimonialContainer.scrollWidth - width - gap <=
					mainContainer.scrollLeft + width
				) {
					this.showNextBtn = false;
				}
			}, 100);
			setTimeout(() => {
				if (mainContainer.scrollLeft != 0) {
					this.showPrevBtn = true;
				}
			}, 100);
		},

		slidePrev(mainContainer, testimonialContainer, providedGap) {
			const gap = 20;

			const width = mainContainer.offsetWidth;
			mainContainer.scrollBy(-(width + gap), 0, "smooth");

			if (
				!testimonialContainer.scrollWidth - width - mainGap <=
				mainContainer.scrollLeft + width
			) {
				this.showNextBtn = true;
			}

			setTimeout(() => {
				if (mainContainer.scrollLeft <= 0) {
					this.showPrevBtn = false;
				}
			}, 500);
		},
	}));
});
