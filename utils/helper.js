function generateTimeSlots(startTime, endTime, interval) {
  const slots = [];
  let slotNumber = 1;
  let currentTime = new Date(`2023-01-01T${startTime}:00`);

  const endTimeDate = new Date(`2023-01-01T${endTime}:00`);

  while (currentTime < endTimeDate) {
    const slotStartTime = currentTime.toTimeString().substring(0, 5);
    currentTime.setMinutes(currentTime.getMinutes() + interval);
    const slotEndTime = currentTime.toTimeString().substring(0, 5);

    slots.push({
      slot_num: slotNumber,
      slot_start_time: slotStartTime,
      slot_end_time: slotEndTime,
    });

    slotNumber++;
  }

  return slots;
}

module.exports = { generateTimeSlots };
