<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Result;

class ResultController extends AbstractController
{
    #[Route('/result', name: 'app_result')]
    public function index(): Response
    {
        return $this->render('result/index.html.twig', [
            'controller_name' => 'ResultController',
        ]);
    }
    #[Route('/result', name: 'app_result', methods:["POST"])]
    public function new(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
  
        $project = new Result();
        $project->setName($request->request->get('name'));
  
        $entityManager->persist($project);
        $entityManager->flush();
  
        return $this->json('Created new result successfully with id ' . $project->getId());
    }
}
