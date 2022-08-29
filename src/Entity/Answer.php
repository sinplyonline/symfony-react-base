<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Answer.
 *
 * @ORM\Table(name="answer")
 * @ORM\Entity(repositoryClass="App\Repository\AnswerRepository")
 */
class Answer
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="answerText", type="string", length=255)
     */
    private $answerText;
    
    /**
     * @var boolean
     *
     * @ORM\Column(name="correctAnswer", type="boolean")
     */
    private $correctAnswer;
    
    /**
     * @var Question
     *
     * @ORM\ManyToOne(targetEntity="Question", inversedBy="answers")
     **/
    private $question;

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set answerText
     *
     * @param string $answerText
     *
     * @return Answer
     */
    public function setAnswerText($answerText)
    {
        $this->answerText = $answerText;

        return $this;
    }

    /**
     * Get answerText.
     *
     * @return string
     */
    public function getAnswerText()
    {
        return $this->answerText;
    }

    /**
     * Set correctAnswer
     *
     * @param string $correctAnswer
     *
     */
    public function setCorrectAnswer($correctAnswer)
    {
        $this->correctAnswer = $correctAnswer;

        return $this;
    }

    /**
     * Get correctAnswer.
     *
     * @return boolean
     */
    public function getCorrectAnswer()
    {
        return $this->correctAnswer;
    }

    /**
     * Set question
     *
     * @param \App\Entity\Question $question
     * @return Answer
     */
    public function setQuestion(\App\Entity\Question $question = null)
    {
        $this->question = $question;

        return $this;
    }

    /**
     * Get question
     *
     * @return \App\Entity\Question 
     */
    public function getQuestion()
    {
        return $this->question;
    }
    

    
}