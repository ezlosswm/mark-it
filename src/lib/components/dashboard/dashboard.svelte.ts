class DashboardState {
	isOpen = $state(false);

	toggle() {
		this.isOpen = !this.isOpen;
	}
}

export const dashboard = new DashboardState();
