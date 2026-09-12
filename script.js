const nameInput = document.querySelector('#name-input');
const handleOutput = document.querySelector('#handle-output');
const copyHandle = document.querySelector('#copy-handle');
const handleLab = document.querySelector('.handle-lab');
const requirements = document.querySelectorAll('[data-requirement]');

const formatHandle = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'night-shift';

const usernameRequirements = [
	{ id: 'min-length', met: (value) => value.length >= 8 },
	{ id: 'max-length', met: (value) => value.length <= 20 },
	{ id: 'uppercase', met: (value) => /[A-Z]/.test(value) },
	{ id: 'lowercase', met: (value) => /[a-z]/.test(value) },
	{ id: 'number', met: (value) => /[0-9]/.test(value) },
	{ id: 'special', met: (value) => /[^a-zA-Z0-9]/.test(value) },
	{ id: 'mountain', met: (value) => /everest/i.test(value) },
	{ id: 'ocean', met: (value) => /pacific/i.test(value) }
];

// Track which requirement index the user is currently working on. Starts at 0 (the beginning).
let currentRequirementIndex = 0;

const allRequirementsMet = () => {
	updateUsernameState();
	const username = `@${handleOutput.textContent}`;
	try { navigator.clipboard.writeText(username); } catch { /* Clipboard access can be unavailable on local files. */ }
	sessionStorage.setItem('nightShiftUsername', username);
	window.location.href = 'password.html';
};

const updateRequirementsStatus = () => {
	handleLab.classList.add('show-requirements');
	usernameRequirements.forEach((req, idx) => {
		const el = document.querySelector(`[data-requirement="${req.id}"]`);
		if (!el) return;
		if (idx <= currentRequirementIndex) {
			el.hidden = false;
			const isRuleMet = req.met(nameInput.value);
			el.classList.toggle('met', isRuleMet);
		} else {
			el.hidden = true;
			el.classList.remove('met');
		}
	});
};

const shake = () => {
	const inputRow = nameInput.closest('.handle-input-wrap');
	if (inputRow) {
		inputRow.classList.remove('shake');
		void inputRow.offsetWidth;
		inputRow.classList.add('shake');
	}
	nameInput.focus();
};

const updateUsernameState = () => {
	const allMet = usernameRequirements.every((req) => req.met(nameInput.value));
	const isValid = nameInput.value.length >= 8 && nameInput.value.length <= 20 && allMet;
	handleLab.classList.toggle('valid', isValid && nameInput.value.length > 0);
	copyHandle.disabled = !isValid;
	copyHandle.setAttribute('aria-disabled', String(!isValid));
};

// Try to advance past the current requirement when Enter is pressed.
// Every previously completed requirement and the current one must always be met.
const tryAdvanceRequirement = () => {
	const allUnlockedMet = usernameRequirements
		.slice(0, currentRequirementIndex + 1)
		.every((req) => req.met(nameInput.value));

	if (!allUnlockedMet) {
		updateRequirementsStatus();
		shake();
		return false;
	}

	if (currentRequirementIndex < usernameRequirements.length - 1) {
		currentRequirementIndex++;
		updateRequirementsStatus();
		updateUsernameState();
		nameInput.focus();
		return true;
	} else {
		allRequirementsMet();
		return true;
	}
};

nameInput.addEventListener('input', () => {
	handleOutput.textContent = formatHandle(nameInput.value);
	handleOutput.animate([{ opacity: .35, transform: 'translateY(3px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 220, easing: 'ease-out' });
	handleLab.classList.remove('invalid');
	updateRequirementsStatus();
	updateUsernameState();
});

nameInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		tryAdvanceRequirement();
	}
});

copyHandle.addEventListener('click', () => {
	tryAdvanceRequirement();
});

currentRequirementIndex = 0;
updateRequirementsStatus();
updateUsernameState();
