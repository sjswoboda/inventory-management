export interface GetInvoicesResponse {
    id: number;
    supplier_id: number;
    supplier_name: string;
    order_number: string;
    order_date: Date;
    order_shipped_date: Date;
    order_received_date: Date;
    discount_amount: number;
    shipping_amount: number;
    invoiced_amount: number;
    billed_amount: number;
}
