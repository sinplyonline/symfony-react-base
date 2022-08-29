<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Result;

class ResultController extends AbstractController
{
    #[Route('/results', name: 'result_index', methods:["GET"])]
    public function index(ManagerRegistry $doctrine)
    {
        $results = $doctrine
            ->getRepository(Result::class)
            ->findAll();
            foreach ($results as $result) {
                $data[] = [
                    'id' => $result->getId(),
                    'name' => $result->getName(),
                    'score' => $result->getScore()
                ];
            }
        
            
            return $this->json($data);
    }

    #[Route('/result', name: 'result_new', methods:["POST"])]
    public function new(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
  
        $result = new Result();
        $result->setName($request->request->get('name'));
        $result->setEmail($request->request->get('email'));
        $result->setScore($request->request->get('score'));
  
        $entityManager->persist($result);
        $entityManager->flush();
  
        return $this->json('Je resultaat is opgeslagen!');
    }

}
