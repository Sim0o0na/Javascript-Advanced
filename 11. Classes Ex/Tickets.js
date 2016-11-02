function solve(lines, criteria) {
    let tickets = [];
    class Ticket{
        constructor(dest, pr, stat){
            this.destination = dest;
            this.price = Number(pr);
            this.status = stat;
        }
    }
    for(let line of lines){
        line = line.split('|');
        let ticket = new Ticket(line[0], line[1], line[2], line[3]);
        tickets.push(ticket);
    }
    function sortObj(list, key) {
        function compare(a, b) {
            a = a[key];
            b = b[key];
            var type = (typeof(a) === 'string' ||
            typeof(b) === 'string') ? 'string' : 'number';
            var result;
            if (type === 'string') result = a.localeCompare(b);
            else result = a - b;
            return result;
        }
        return list.sort(compare);
    }
    return sortObj(tickets, criteria);
}
solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');