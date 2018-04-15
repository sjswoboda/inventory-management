export interface GetLineItemsResponse {
    id: number;
    invoice_id: number;
    description: string;
    quantity: number;
    lot_size: number;
    discount_amount: number;
    shipping_amount: number;
    invoiced_amount: number;
}
