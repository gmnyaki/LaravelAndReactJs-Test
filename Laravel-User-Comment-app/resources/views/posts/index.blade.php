@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Users Comments </div>
                <!-- This section displays the comments posted by users -->
              
                    @if($posts->count())

                        <div class="panel panel-default">                            
                            <div class="panel-body">  
                                     
                                @foreach ($posts as $post)
                                    <div class="comment-panel">
                                        <div class="img-section">
                                            <div class="user-img"> IMAGE</div>
                                        </div>
                                        <div class="msg-section">
                                            <p> <span style="color:blue">By {{ $post->user->name}} </span> {{$post->created_at->diffForHumans()}} </p>
                                            <p> {{ $post->comment}}  </p>
                                        </div>
                                    </div>

                                @endforeach
                                      
                            </div>
                        </div>
                    @endif
             

            <!-- this section displays the comment upload form -->
                <div class="panel-body">
                    <form class="form-horizontal" action="{{route('post.store')}}" method="post">
                    
                        <div class="form-group{{ $errors->has('title') ? ' has-error' : ''}}">  
                            

                            <div class="col-sm-6">
                                <input type="text" name="title" id="title" placeholder="Please create a title" class="form-control">
                                @if ($errors->has('title'))
                                <div class="help-block">
                                    Title is required.
                                </div>
                                @endif
                            </div>
                            
                        </div>
                    

                        <div class="form-group{{ $errors->has('comment') ? ' has-error' : ''}}">  
                            

                            <div class="col-sm-6">
                                <textarea class="form-control" name="comment" rows="5" placeholder="Please write a comment  ." ></textarea>
                                @if ($errors->has('comment'))
                                <div class="help-block">
                                    A Comment is required.
                                </div>
                                @endif
                            </div>
                            
                        
                        <div class="form-group">
                            <div class="col-sm-offset-3 col-sm-6">
                                <button type="submit" class="btn btn-primary btn-fix"> Create Comment </button>
                            </div>
                        </div>
                        {{csrf_field()}}    
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</div>
@endsection
