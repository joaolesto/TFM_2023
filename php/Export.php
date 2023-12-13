<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require __DIR__ . '/../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

/**
 * Class Export
 *
 *
 * @author   Gustavo Silva <gustavosjob@gmail.com>
 * @license  http://opensource.org/licenses/osl-3.0.php Open Software License OSL3.0
 */
class Export
{

    protected array $input;
    protected array $output;
    protected array $output2000;
    protected array $output2022;
    protected string $filePath;
    protected string $fileName;

    /**
     * Main function
     *
     * @param $post
     * @return void
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    public function execute($post)
    {
        $this->uploadXlsx($post);
        $this->downloadFile();
    }

    /**
     * Upload File
     *
     * @param $post
     * @return Worksheet
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    protected function uploadXlsx($post): Worksheet
    {
        $spreadsheet = new Spreadsheet();
        $writter = new Xlsx($spreadsheet);

        if ($post['type'] == 'ae') {
            // create the content
            $this->input = array_chunk($post['input'],2);
            array_unshift($this->input, ['-','Inputs']);

            $this->output = array_chunk($post['output'],3);
            array_unshift($this->output, ['Outputs','HCM 2000','HCM 7ª edição']);

            // File name and its directory
            $this->fileName = 'AEexported_'. date('d_m_Y H:i') . ".xlsx";
            $this->filePath = "../docs/" . $this->fileName;

            // create
            $create = $writter->getSpreadsheet()->getActiveSheet()
                ->fromArray($this->input, null, 'B2')
                ->fromArray($this->output, null, 'E2');
        }

        if ($post['type'] == 'en') {
            // create the content
            $this->input = array_chunk($post['input'],2);
            array_unshift($this->input, ['-','Inputs']);

            $this->output2000 = array_chunk($post['output_2000'],2);
            array_unshift($this->output2000, ['Outputs','HCM 2000']);

            $this->output2022 = array_chunk($post['output_2022'],2);
            array_unshift($this->output2022, ['Outputs','HCM 7ª edição']);

            // File name and its directory
            $this->fileName = 'AEexported_'. date('d_m_Y H:i') . ".xlsx";
            $this->filePath = "../docs/" . $this->fileName;

            // create
            $create = $writter->getSpreadsheet()->getActiveSheet()
                ->fromArray($this->input, null, 'B2')
                ->fromArray($this->output2000, null, 'E2')
                ->fromArray($this->output2022, null, 'H2')
                ->calculateColumnWidths();
        }

        // validate create
        if (empty($create)) {
            return $writter->getSpreadsheet()->getActiveSheet();
        }

        // format columns
        foreach ($create->getColumnIterator() as $column) {
            $writter->getSpreadsheet()->getActiveSheet()
                ->getColumnDimension($column->getColumnIndex())->setAutoSize(true);
        }

        $writter->save($this->filePath);
        return $create;
    }

    /**
     * Download File
     *
     * @return void
     */
    protected function downloadFile(): void
    {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $this->fileName . '"');
        readfile($this->filePath);
    }

}
