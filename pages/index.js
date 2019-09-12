import { Layout, Page, EmptyState } from '@shopify/polaris';
import CsvUploader from './csvUploader';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
    <EmptyState image={img}>
      <h1>Upload your CSV</h1>
      <hr />
      <CsvUploader/>
    </EmptyState>
    </Layout>
  </Page>
 
);

export default Index;