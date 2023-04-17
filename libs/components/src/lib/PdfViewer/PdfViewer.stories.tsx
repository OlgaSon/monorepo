import { Story, Meta } from '@storybook/react';
import { PdfViewer, IPdfViewerProps } from './PdfViewer';

export default {
  component: PdfViewer,
  title: 'Components/PdfViewer',
  args: {
    pathToFile: './StatementOfReturn.pdf',
  },
  argTypes: {
    pathToFile: {
      description:
        'Either a URL pointing to a PDF-file, or a local file path to the PDF-file',
    },
  },
} as Meta;

const Template: Story<IPdfViewerProps> = (args) => <PdfViewer {...args} />;

export const PdfViewerStory = Template.bind({});
PdfViewerStory.args = {};
