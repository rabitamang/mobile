import { CustomerPage } from './CustomerPage';
import { CustomersPage } from './CustomersPage';
import { CustomerInvoicePage } from './CustomerInvoicePage';
import { CustomerInvoicesPage } from './CustomerInvoicesPage';
import { FirstUsePage } from './FirstUsePage';
import { MenuPage } from './MenuPage';
import { RequisitionsPage } from './RequisitionsPage';
import { RequisitionPage } from './RequisitionPage';
import { StockPage } from './StockPage';
import { StocktakeEditPage } from './StocktakeEditPage';
import { StocktakeManagePage } from './StocktakeManagePage';
import { StocktakesPage } from './StocktakesPage';
import { SupplierInvoicePage } from './SupplierInvoicePage';
import { SupplierInvoicesPage } from './SupplierInvoicesPage';
import { RealmExplorer } from './RealmExplorer';

export const PAGES = {
  customer: CustomerPage,
  customerInvoice: CustomerInvoicePage,
  customerInvoices: CustomerInvoicesPage,
  customers: CustomersPage,
  firstUse: FirstUsePage,
  menu: MenuPage,
  realmExplorer: RealmExplorer,
  root: MenuPage,
  stock: StockPage,
  requisitions: RequisitionsPage,
  requisition: RequisitionPage,
  stocktakeEditor: StocktakeEditPage,
  stocktakeManager: StocktakeManagePage,
  stocktakes: StocktakesPage,
  supplierInvoice: SupplierInvoicePage,
  supplierInvoices: SupplierInvoicesPage,
};

export const FINALISABLE_PAGES = {
  supplierInvoice: {
    recordType: 'Transaction',
    recordToFinaliseKey: 'transaction',
  },
  customerInvoice: {
    recordType: 'Transaction',
    recordToFinaliseKey: 'invoice',
  },
  requisition: {
    recordType: 'Requisition',
    recordToFinaliseKey: 'requisition',
  },
  stocktakeEditor: {
    recordType: 'Stocktake',
    recordToFinaliseKey: 'stocktake',
  },
};
