class TimeSpan {
  start: Date;
  end: Date;
  durationInMilliseconds: number;

  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
    this.durationInMilliseconds = end.getTime() - start.getTime();
  }

  getDurationInSeconds(): number {
    return this.durationInMilliseconds / 1000;
  }

  getDurationInMinutes(): number {
    return this.getDurationInSeconds() / 60;
  }
}

export default TimeSpan;
