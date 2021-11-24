export default function hendlerDate(inpStart, inpEnd, period, setPeriod, warningStart, setWarningStart, warningEnd, setWarningEnd, setShowStatistics) {
  const today = new Date();
	let endNumb, startNumb, isErrorEnd, isErrorStart;

	const transformInpDateToNumber = (inputDate) => {
		const days = new Date(inputDate)
		return (Math.ceil((today - days) / 86400000))
	}

	const checkForError = (numbDays) => {
		return (numbDays < 1 || numbDays > period.length) ? true : false
	}

	const printOrHideError = (isError, label) => {
		//error
		if (isError) {
			setShowStatistics(false);

			switch (label) {
				case 'start':
					setWarningStart({
						...warningStart, start: true
					})
					break;
				case 'end':
					setWarningEnd({
						...warningEnd, end: true
					})
					break;
				default: return;
			}
		}
		// no error
		if (!isError) {
			switch (label) {
				case 'start':
					setWarningStart({
						...warningStart, start: false
					})
					break;
				case 'end':
					setWarningEnd({
						...warningEnd, end: false
					})
					break;
				default: return;
			}
		}
	}

	if (inpStart.length) {
		startNumb = transformInpDateToNumber(inpStart)
		isErrorStart = checkForError(startNumb)
		printOrHideError(isErrorStart, 'start')
  }
	if (inpEnd.length) {
		endNumb = transformInpDateToNumber(inpEnd)
		isErrorEnd = checkForError(endNumb)
		printOrHideError(isErrorEnd, 'end')
	}

	if (isErrorEnd === false && isErrorStart === false) {
		setPeriod({ start_period: startNumb, end_period: endNumb, });
		setShowStatistics(true);
	}
}
