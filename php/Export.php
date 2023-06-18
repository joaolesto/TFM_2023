<?php

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

    protected array $content;
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
        // create the content
        $this->content = array_chunk($post,3);
        array_unshift($this->content, ['Outputs','HCM 2000','HCM 7ª edição']);

        $spreadsheet = new Spreadsheet();
        $writter = new Xlsx($spreadsheet);

        // File name and its directory
        $this->fileName = 'AEexported_'. date('d_m_Y H:i') . ".xlsx";
        $this->filePath = "../docs/" . $this->fileName;
        
        // create
        $create = $writter->getSpreadsheet()->getActiveSheet()->fromArray($this->content);
        $writter->save($this->filePath);

        return $create;
    }

    /**
     * Download File
     *
     * @return void
     */
    protected function downloadFile()
    {
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . $this->fileName . '"');
        readfile($this->filePath);
    }

}