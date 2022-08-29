<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Answer;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class AnswerController extends AbstractController
{
    /**
     * @Route("/answers", name="answers_list")
     * @Method({"GET"})
     */
    public function getListAction(ManagerRegistry $doctrine)
    {
        $answers = $doctrine
            ->getRepository(Answer::class)
            ->findAll();

            foreach ($answers as $answer) {
                $data[] = [
                    'id' => $answer->getId(),
                    'text' => $answer->getAnswerText(),
                    'question'=> $answer->getQuestion(),
                    'correct'=> $answer->getCorrectAnswer()
                ];
            }
        
            
            return $this->json($data);
    }
}