function hendlerDate(inpStart, inpEnd, period, setPeriod, warningStart, setWarningStart, warningEnd, setWarningEnd, setShowStatistics) {
  const today = new Date();
	let start, end;

	const checkForError = (inputDay, label) => {
		const days = new Date(inputDay)
		const deff = (Math.trunc((today - days) / 86400000))
		//check entered period length
		if (deff < 1 || deff > period.length) {
			setShowStatistics(false)
			if (label === 'start') {
				setWarningStart({
					...warningStart, start: true
				})
			}
			if (label === 'end') {
				setWarningEnd({
					...warningEnd, end: true
				})
			}
		} else {
			if (label === 'start') {
				setWarningStart({
					...warningStart, start: false
				})
			}
			if (label === 'end') {
				setWarningEnd({
					...warningEnd, end: false
				})
			}
			return deff
		}
	}

	if (inpEnd.length) {
		end = checkForError(inpEnd, 'end')
  }
	if (inpStart.length) {
		start = checkForError(inpStart, 'start')
  }
	if (start && end) {
		setPeriod({ start_period: start, end_period: end, });
		setShowStatistics(true);
	}
}
export default hendlerDate;