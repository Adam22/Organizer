import TimeSpan from "./TimeSpan";

class Task {
  private _code: string;
  private _summary: string;
  private _start: Date;
  private _end: Date;
  private _duration: TimeSpan;

  constructor(code: string, summary: string, start: Date, end: Date) {
    this._code = code;
    this._summary = summary;
    this._start = start;
    this._end = end;
    this._duration = new TimeSpan(start, end);
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
    this._updateDuration();
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
    this._updateDuration();
  }

  get duration(): TimeSpan {
    return this._duration;
  }

  private _updateDuration(): void {
    this._duration = new TimeSpan(this._start, this._end);
  }
}

export default Task;
