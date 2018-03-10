General
------

It starts with a `Supplier` who are available through various avenues (such as Aliexpress). A `Supplier` provides us with `Item`s which we pay for through an `Invoice`. We can get the same items from various `Supplier`s, and each `Supplier` can sell items in various quantities (i.e. sometimes selling them as sets). Depending on the amount on our invoice, we may even get a discount on the overall invoice, reducing our total cost for all items. We may also have to pay shipping based on our total or based on a specific item, which increases the item's cost.

To make things more interesting, some of our suppliers operate in a different currency. So our final payment (on the credit card) can vary, which also changes our final item cost.

Things we know:
* An invoice has exactly one supplier; but a supplier may have many invoices.
* An invoice has multiple items.
* An invoice may have a discount, a shipping cost.
* An invoice has a date of purchase, date item was shipped, and date item was recieved.
* An invoice has bill at time of purchase and an amount remitted.
* An invoice has line items which detail the quantity purchased
* A line item can have one or more items - i.e. if a 'box' of 'assorted' items were purchased.
* An item has a total cost which is the sum of base cost, shipping, discount, currency conversion cost.
* An item's quality may vary by supplier, so an item must be tracked by its supplier+invoice but still be related to the 'base' item for `Inventory` purposes.
* An item has a name, a description, and a `Classification` which determines the type of item it is.