export class ApiConfiguration {
    private static readonly ApiPort = 3000;
    constructor() {
        console.log('Constructing ApiConfiguration...');
    }

    public get baseUrl() {
        const prefix = `${window.location.protocol}//`;
        return `${prefix}${window.location.hostname}:${ApiConfiguration.ApiPort}`;
    }

    public get suppliers() {
        return `${this.baseUrl}/suppliers`;
    }

    public get invoices() {
        return `${this.baseUrl}/invoices`;
    }

    public invoice(id: number) {
        return `${this.invoices}/${id}`;
    }

    public line_items(invoice_id: number) {
        return `${this.invoice(invoice_id)}/line_items`;
    }
}
