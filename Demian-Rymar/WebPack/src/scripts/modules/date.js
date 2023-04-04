export class ExtendedDate extends Date {
    toText() {
        let monthNames = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        let day = this.getDate();
        let monthIndex = this.getMonth();
        let month = monthNames[monthIndex];
        return `${day} ${month}`;
    }
    isFuture() {
        let now = new Date();
        return this > now;
    }
    isLeapYear() {
        let year = this.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    nextDay() {
        let tomorrow = new Date(this);
        tomorrow.setDate(this.getDate() + 1);
        return tomorrow;
    }
}