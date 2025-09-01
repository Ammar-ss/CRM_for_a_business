# AMMAR Industrial Corporation - ERP System

A comprehensive Enterprise Resource Planning (ERP) system designed specifically for Small to Medium Enterprises (SMEs) in the industrial sector. Built with modern web technologies to streamline business operations, inventory management, sales, and financial processes.

![AMMAR Industrial ERP](https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2F18131d2f53ad4e7780e2c0e6abcabfe9?format=webp&width=800)

## 🌟 Features

### 📊 Dashboard & Analytics

- **Real-time Dashboard**: Comprehensive overview with key metrics and KPIs
- **Quick Actions**: One-click access to frequently used functions
- **Business Insights**: Monthly trends, top products, and client analytics
- **Inventory Alerts**: Low stock notifications and reorder point management

### ���� Sales Management

- **Sales Orders**: Create and track customer orders
- **Quotations**: Generate professional quotes with auto-calculations
- **Invoicing**: Automated invoice generation with GST calculations
- **Payment Tracking**: Monitor payments and follow-ups
- **Client Management**: Comprehensive customer database

### 🛒 Purchase Management

- **Purchase Orders**: Streamlined supplier order management
- **Materials Received**: Track incoming inventory and quality checks
- **Supplier Management**: Maintain supplier relationships and contact details
- **Secondary Purchases**: Handle emergency and ad-hoc purchases

### 📦 Inventory Control

- **Product Management**: Complete product catalog with categories and pricing
- **Stock Monitoring**: Real-time inventory levels and alerts
- **Reorder Point Management**: Automated reorder suggestions
- **Assembly Management**: Handle product assemblies and BOM

### 💰 Financial Management

- **Journal Entries**: Double-entry bookkeeping system
- **Bank Account Management**: Multiple bank account tracking
- **Payment Processing**: Handle incoming and outgoing payments
- **Financial Reports**: Sales and purchase ledgers

### 🎯 Advanced Features

- **Estimate & Approvals**: Project estimation with approval workflows
- **Multi-user Support**: Role-based access control
- **Data Export**: CSV export functionality
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ammar-industrial-erp.git
   cd ammar-industrial-erp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`
   - Use the default login credentials:
     - **Username**: `admin`
     - **Password**: `123`

## 🔧 Development Setup

### Project Structure

```
ammar-industrial-erp/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── forms/         # Form components
│   │   ├── pages/         # Page components
│   │   └── ui/            # UI library components
│   ├── lib/               # Utility functions and constants
│   │   ├── constants.ts   # Application constants
│   │   ├── types.ts       # TypeScript type definitions
│   │   ├── helpers.ts     # Helper functions
│   │   └── sampleData.ts  # Sample data for development
│   └── pages/             # Main page components
├── server/                # Backend API (Node.js/Express)
├── shared/                # Shared types and utilities
└── netlify/               # Netlify functions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

### Technology Stack

**Frontend:**

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Lucide React for icons
- React Router for navigation

**Backend:**

- Node.js with Express
- TypeScript
- File-based data storage (JSON)

**UI Components:**

- Custom component library built with Tailwind CSS
- Responsive design patterns
- Accessibility-first approach

## 📱 Usage Guide

### Login & Authentication

1. Navigate to the application URL
2. Enter the default credentials or your assigned login details
3. The system supports session persistence and "Remember Me" functionality

### Dashboard Navigation

- **Sidebar Menu**: Access all modules through the collapsible sidebar
- **Quick Actions**: Use dashboard quick actions for common tasks
- **Search**: Global search functionality across modules
- **Notifications**: Real-time alerts for low stock and pending tasks

### Key Workflows

#### Creating a Sales Order

1. Navigate to Sales → Sales Order or use Quick Actions
2. Select client and add products
3. Review pricing and apply discounts if needed
4. Save and generate order confirmation

#### Managing Inventory

1. Go to Management → Products
2. Add new products with categories and pricing
3. Monitor stock levels through the dashboard
4. Set reorder points for automatic alerts

#### Processing Payments

1. Use Quick Actions → Add Payment
2. Select payment type (received/paid)
3. Enter payment details and method
4. Link to relevant invoices or orders

### Sample Data

The application comes pre-loaded with realistic sample data including:

- **156 Products** across various industrial categories
- **42 Active Clients** with complete contact information
- **Sample Transactions** demonstrating typical SME workflows
- **Financial Data** showing business insights and trends

## 🔐 Default Users & Permissions

| Username       | Password | Role              | Permissions                   |
| -------------- | -------- | ----------------- | ----------------------------- |
| admin          | 123      | Administrator     | Full system access            |
| rajesh.sales   | 123      | Sales Manager     | Sales, clients, quotations    |
| priya.accounts | 123      | Accountant        | Accounting, payments, reports |
| amit.warehouse | 123      | Warehouse Manager | Inventory, products, stock    |

## 🎨 Customization

### Branding

Update company information in `client/lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Your Company Name",
  logo: "path/to/your/logo.png",
  // ... other details
};
```

### Sample Data

Modify sample data in `client/lib/sampleData.ts` to match your business:

- Product categories and pricing
- Client and supplier information
- Financial configurations

### UI Theming

The application uses Tailwind CSS. Customize colors and styling in:

- `tailwind.config.ts` - Theme configuration
- `client/global.css` - Global styles

## 📊 Business Intelligence

### Dashboard Metrics

- Monthly sales trends and targets
- Top-selling products analysis
- Client performance metrics
- Inventory turnover rates

### Reporting Features

- Sales and purchase ledgers
- Inventory reports with reorder suggestions
- Payment tracking and aging reports
- Financial statements and journal entries

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Environment Variables

Create a `.env` file for production settings:

```
VITE_API_URL=your-api-url
VITE_APP_NAME=AMMAR Industrial ERP
```

### Deployment Options

- **Netlify**: Automated deployment with included configuration
- **Vercel**: Zero-config deployment for full-stack applications
- **Traditional Hosting**: Build and upload the `dist` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain component modularity
- Write descriptive commit messages
- Test functionality before submitting PRs

## 📞 Support

For technical support or feature requests:

- Create an issue on GitHub
- Email: support@ammarindustrial.com
- Documentation: [Project Wiki](https://github.com/yourusername/ammar-industrial-erp/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Designed specifically for SME industrial businesses
- Inspired by real-world ERP requirements
- Community-driven development approach

---

**Made with ❤️ for Small & Medium Enterprises**

_Streamline your business operations with AMMAR Industrial ERP - where efficiency meets innovation._
