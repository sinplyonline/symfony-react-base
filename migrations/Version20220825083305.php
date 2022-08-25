<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220825083305 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE answer (id INT AUTO_INCREMENT NOT NULL, content VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE questions_answers (id INT AUTO_INCREMENT NOT NULL, question_id INT DEFAULT NULL, answer_id INT DEFAULT NULL, INDEX IDX_2355E6C01E27F6BF (question_id), INDEX IDX_2355E6C0AA334807 (answer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE questions_answers ADD CONSTRAINT FK_2355E6C01E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)');
        $this->addSql('ALTER TABLE questions_answers ADD CONSTRAINT FK_2355E6C0AA334807 FOREIGN KEY (answer_id) REFERENCES answer (id)');
        $this->addSql('ALTER TABLE question ADD question_text VARCHAR(255) NOT NULL, DROP question, DROP answer');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE questions_answers DROP FOREIGN KEY FK_2355E6C01E27F6BF');
        $this->addSql('ALTER TABLE questions_answers DROP FOREIGN KEY FK_2355E6C0AA334807');
        $this->addSql('DROP TABLE answer');
        $this->addSql('DROP TABLE questions_answers');
        $this->addSql('ALTER TABLE question ADD answer VARCHAR(255) NOT NULL, CHANGE question_text question VARCHAR(255) NOT NULL');
    }
}
