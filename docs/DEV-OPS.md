# DEV-OPS

# Summary
This project use AWS (us-east-1 N. Virginia)

## Network flow 
```
Route 53
 |
CloudFront
 |
API Gateway - Route 53 (because it's designed MSA)
 |
IG
 |
RT
 |
VPC
 |
Cluster
 |
Service (this project oriented 1 cluster per 1 service)
 | \ \ \
 | 
 |
LB
 |
TG
 |
Subnets
 | \ \ \ \ \
 |  \ \ \ \ \
 |   \ \ \ \ \
 a    b c d e f
Task
 | \ \
 |           
Container (this project oriented 1 task per 1 container)

```

<br>
<br>

# Code Pipeline

## CodeBuild

* add 'AmazonEC2ContainerRegistryPowerUser
' policy in codebuild-service-role

* project -> environment -> override image -> enable 'Privileged'

<br>
<br>

# AWS Debug

* Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? 
https://github.com/aws/aws-codebuild-docker-images/issues/164

