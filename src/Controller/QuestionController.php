<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Question;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;

class QuestionController extends AbstractController
{
    #[Route('/question', name: 'question_index', methods:['GET'])]
    public function index(ManagerRegistry $doctrine): Response
    {
        $questions = $doctrine->getRepository(Question::class)->findAll();
        $data = [];
  
        foreach ($questions as $question) {
            $data[] = [
                'id' => $question->getId(),
                'text' => $question->getQuestionText()
            ];
        }
        return $this->json($data);
    }

    #[Route('/question/{id}', name: 'question_show', methods:["GET"])]
    public function show(int $id): Response
    {
        $project = $this->getDoctrine()
            ->getRepository(Question::class)
            ->find($id);
  
        if (!$project) {
  
            return $this->json('No project found for id' . $id, 404);
        }
  
        $data =  [
            'id' => $project->getId(),
            'questiontext' => $project->getQuestionText()
        ];
          
        return $serializer->serialize($product, 'json', $context);
    }
}
